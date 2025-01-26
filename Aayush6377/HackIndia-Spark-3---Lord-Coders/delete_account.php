<?php
session_start();
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "greenpath";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

// Fetch the current user ID
$user_id = $_SESSION['user_id'];

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['confirm'])) {
        // Delete the user's account
        $sql = "DELETE FROM users WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $user_id);
        if ($stmt->execute()) {
            // Delete user's tokens
            $sql = "DELETE FROM tokens WHERE user_id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $user_id);
            $stmt->execute();

            // Delete user's transactions
            $sql = "DELETE FROM token_transactions WHERE user_id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $user_id);
            $stmt->execute();

            // End the session and redirect to the home page
            session_destroy();
            header("Location: index.php");
            exit();
        } else {
            $error = "Failed to delete account. Please try again.";
        }
        $stmt->close();
    } elseif (isset($_POST['cancel'])) {
        header("Location: index.php");
        exit();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete Account</title>
    <style>
        /* General Styles */
        body {
            font-family: 'Arial', sans-serif;
            background-color: #e8f5e9; /* Light green background */
            margin: 0;
            padding: 0;
            color: #2e7d32; /* Dark green text */
        }

        header {
            background-color: #2e7d32; /* Dark green background */
            color: white;
            padding: 10px 20px;
            text-align: center;
            font-size: 24px;
        }

        main {
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            background-color: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            text-align: center;
        }

        h2 {
            margin-bottom: 20px;
            color: #2e7d32; /* Dark green text */
        }

        p {
            font-size: 16px;
            color: #c62828; /* Red for warning messages */
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        button {
            background-color: #e53935; /* Red for danger actions */
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            margin: 10px;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #c62828;
        }

        footer {
            background-color: #2e7d32; /* Dark green background */
            color: white;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            width: 100%;
            bottom: 0;
            left: 0;
        }

        /* Responsive Design */
        @media (max-width: 600px) {
            main {
                margin: 20px;
                padding: 15px;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>GreenPath</h1>
    </header>
    
    <main>
        <h2>Delete Account</h2>

        <p>Are you sure you want to delete your account? This action is irreversible, and all your tokens will be lost.</p>

        <form action="delete_account.php" method="post">
            <button type="submit" name="confirm">Yes, Delete My Account</button>
            <button type="submit" name="cancel">Cancel</button>
        </form>

        <?php if (isset($error)): ?>
            <p><?php echo htmlspecialchars($error); ?></p>
        <?php endif; ?>
    </main>

    <footer>
        <p>&copy; 2024 GreenPath. All rights reserved.</p>
    </footer>
</body>
</html>

<?php $conn->close(); ?>
