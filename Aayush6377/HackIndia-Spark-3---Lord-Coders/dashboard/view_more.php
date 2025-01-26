<?php
session_start();

// Check if the admin is logged in
if (!isset($_SESSION['admin_id'])) {
    header('Location: login.php');
    exit();
}

include 'nav.php';

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

// Fetch campaign details
if (isset($_GET['id'])) {
    $campaign_id = intval($_GET['id']);

    $stmt = $conn->prepare("SELECT * FROM donation_campaigns WHERE id = ?");
    $stmt->bind_param("i", $campaign_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 1) {
        $campaign = $result->fetch_assoc();
    } else {
        die("Campaign not found.");
    }

    $stmt->close();
} else {
    die("Invalid campaign ID.");
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Campaign Details</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #ecf0f1;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 90%;
            max-width: 800px;
            margin: 40px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #2c3e50;
            margin-bottom: 20px;
            font-size: 24px;
        }
        img.campaign-image {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }
        .details {
            margin-bottom: 20px;
        }
        .details p {
            font-size: 16px;
            margin: 5px 0;
        }
        .action-buttons {
            margin-top: 20px;
        }
        .action-buttons a, .action-buttons button {
            display: inline-block;
            padding: 8px 16px;
            margin-right: 10px;
            border-radius: 4px;
            text-decoration: none;
            font-size: 14px;
            cursor: pointer;
            color: white;
        }
        .accept {
            background-color: #2ecc71;
        }
        .reject {
            background-color: #e74c3c;
        }
        .delete {
            background-color: #e74c3c;
            color: white;
        }
        .accept:hover, .reject:hover, .delete:hover {
            opacity: 0.8;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Campaign Details</h1>

    <img class="campaign-image" src="<?php echo "../".htmlspecialchars($campaign['image_url']); ?>" alt="<?php echo htmlspecialchars($campaign['name']); ?>">

    <div class="details">
        <p><strong>Name:</strong> <?php echo htmlspecialchars($campaign['name']); ?></p>
        <p><strong>Description:</strong> <?php echo htmlspecialchars($campaign['description']); ?></p>
        <p><strong>Target Tokens:</strong> <?php echo htmlspecialchars($campaign['target_tokens']); ?></p>
        <p><strong>Current Tokens:</strong> <?php echo htmlspecialchars($campaign['current_tokens']); ?></p>
        <p><strong>Likes:</strong> <?php echo htmlspecialchars($campaign['likes']); ?></p>
        <p><strong>Status:</strong> <?php echo htmlspecialchars($campaign['status']); ?></p>
        <p><strong>Approved At:</strong> <?php echo htmlspecialchars($campaign['approved_at']); ?></p>
        <p><strong>Created At:</strong> <?php echo htmlspecialchars($campaign['created_at']); ?></p>
    </div>

    <div class="action-buttons">
        <?php if ($campaign['status'] == 'pending'): ?>
            <a class="accept" href="manage_campaigns.php?campaign_id=<?php echo $campaign['id']; ?>&status=active">Accept</a>
            <a class="reject" href="manage_campaigns.php?campaign_id=<?php echo $campaign['id']; ?>&status=rejected">Reject</a>
        <?php elseif ($campaign['status'] == 'rejected' || $campaign['status'] == 'completed'): ?>
            <a class="delete" href="delete.php?id=<?php echo $campaign['id']; ?>">Delete</a>
        <?php endif; ?>
    </div>
</div>

</body>
</html>
