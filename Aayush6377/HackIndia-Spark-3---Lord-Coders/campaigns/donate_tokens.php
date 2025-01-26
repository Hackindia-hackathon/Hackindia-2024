<?php
session_start();
// Connect to the database
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "greenpath";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if user is logged in
if (!isset($_SESSION['user_id'])) {
    echo "Please log in to donate tokens.";
    exit;
}

$user_id = $_SESSION['user_id'];
$campaign_id = isset($_GET['campaign_id']) ? (int)$_GET['campaign_id'] : 0;

// Get user token amount
$query = $conn->prepare("SELECT amount FROM tokens WHERE user_id = ?");
$query->bind_param("i", $user_id);
$query->execute();
$result = $query->get_result();
$user_tokens = $result->fetch_assoc()['amount'];

// Get campaign details
$campaign_query = $conn->prepare("SELECT name, target_tokens, current_tokens, status FROM donation_campaigns WHERE id = ?");
$campaign_query->bind_param("i", $campaign_id);
$campaign_query->execute();
$campaign = $campaign_query->get_result()->fetch_assoc();

$error_message = "";
$success_message = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $donated_tokens = (int)$_POST['tokens'];

    // Check if user has enough tokens
    if ($donated_tokens > $user_tokens) {
        $error_message = "You don't have enough tokens to donate.";
    } else {
        // Deduct tokens from user
        $new_user_tokens = $user_tokens - $donated_tokens;
        $update_tokens = $conn->prepare("UPDATE tokens SET amount = ? WHERE user_id = ?");
        $update_tokens->bind_param("ii", $new_user_tokens, $user_id);
        $update_tokens->execute();

        // Record the transaction
        $transaction_type = 'donate';
        $description = "Donated $donated_tokens tokens to campaign ID $campaign_id";
        $record_transaction = $conn->prepare("INSERT INTO token_transactions (user_id, type, amount, description) VALUES (?, ?, ?, ?)");
        $record_transaction->bind_param("isis", $user_id, $transaction_type, $donated_tokens, $description);
        $record_transaction->execute();

        // Update the campaign's current tokens
        $update_campaign = $conn->prepare("UPDATE donation_campaigns SET current_tokens = current_tokens + ? WHERE id = ?");
        $update_campaign->bind_param("ii", $donated_tokens, $campaign_id);
        $update_campaign->execute();

        // Check if target tokens are reached
        $new_current_tokens = $campaign['current_tokens'] + $donated_tokens;
        if ($new_current_tokens >= $campaign['target_tokens']) {
            $complete_campaign = $conn->prepare("UPDATE donation_campaigns SET status = 'completed' WHERE id = ?");
            $complete_campaign->bind_param("i", $campaign_id);
            $complete_campaign->execute();
            $success_message = "Thank you for your donation! The campaign has reached its target and is now completed.";
        } else {
            $success_message = "Thank you for your donation of $donated_tokens tokens!";
        }
    }
}

if ($user_tokens <= 0) {
    $error_message = "You do not have any tokens available for donation.";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donate Tokens</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            width: 50%;
            margin: 50px auto;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }

        h2 {
            text-align: center;
            color: #4CAF50;
        }

        .campaign-info {
            margin-bottom: 20px;
        }

        .campaign-info p {
            font-size: 16px;
            color: #333;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
            color: #555;
        }

        input[type="number"] {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }

        button {
            width: 100%;
            padding: 12px;
            font-size: 18px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }

        .message {
            margin-top: 20px;
            padding: 15px;
            text-align: center;
            border-radius: 4px;
        }

        .success {
            background-color: #dff0d8;
            color: #3c763d;
        }

        .error {
            background-color: #f2dede;
            color: #a94442;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>Donate Tokens to Campaign: <?php echo htmlspecialchars($campaign['name']); ?></h2>
    
    <div class="campaign-info">
        <p>Target Tokens: <?php echo $campaign['target_tokens']; ?></p>
        <p>Current Tokens: <?php echo $campaign['current_tokens']; ?></p>
        <p>Status: <?php echo ucfirst($campaign['status']); ?></p>
    </div>

    <?php if ($success_message): ?>
        <div class="message success"><?php echo $success_message; ?></div>
    <?php elseif ($error_message): ?>
        <div class="message error"><?php echo $error_message; ?></div>
    <?php elseif ($user_tokens > 0): ?>
        <form method="POST" action="">
            <div class="form-group">
                <label for="tokens">Enter number of tokens to donate:</label>
                <input type="number" name="tokens" id="tokens" min="1" max="<?php echo $user_tokens; ?>" required>
            </div>
            <button type="submit">Donate</button>
        </form>
    <?php endif; ?>
</div>

</body>
</html>
