<?php
session_start();
$current_page = basename($_SERVER['PHP_SELF']); 

$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "greenpath";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Health Resources</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Style for the dropdown menu */
        .username {
            position: relative;
            display: inline-block;
            cursor: pointer;
        }
        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }
        .dropdown-content a {
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            display: block;
        }
        /* Custom hover colors */
        .dropdown-content a:hover {
            background-color: #f1f1f1;
        }
        .dropdown-content a:hover.edit-profile {
            background-color: darkgreen;
            color: white;
        }
        .dropdown-content a:hover.transaction-history {
            background-color: darkgreen;
            color: white;
        }
        .dropdown-content a:hover.logout {
            background-color: blue;
            color: white;
        }
        .dropdown-content a:hover.delete-account {
            background-color: red;
            color: white;
        }
        .username:hover .dropdown-content {
            display: block;
        }
        .tokens {
            margin-left: 10px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">
            <img src="img/logo.png" alt="Logo">
            <span>GreenPath</span>
        </div>
        <nav>
            <ul>
                <li><a href="index.php" class="<?php echo ($current_page == 'index.php') ? 'active' : ''; ?>">Home</a></li>
                <li><a href="resource.php" class="<?php echo ($current_page == 'resource.php') ? 'active' : ''; ?>">Resources</a></li>
                <li><a href="tools.php" class="<?php echo ($current_page == 'tools.php') ? 'active' : ''; ?>">Tools</a></li>
                <li><a href="personal_health/personal_health.php" class="<?php echo ($current_page == 'personal_health/personal_health.php') ? 'active' : ''; ?>">Personal Health</a></li>
                <li><a href="wellness.php" class="<?php echo ($current_page == 'wellness.php') ? 'active' : ''; ?>">Wellness Programs</a></li>
                <li><a href="community.php" class="<?php echo ($current_page == 'community.php') ? 'active' : ''; ?>">Community</a></li>
                <li><a href="campaigns.php" class="<?php echo ($current_page == 'campaigns.php') ? 'active' : ''; ?>">Campaigns</a></li>
                <?php if(isset($_SESSION['username'])): ?>
                    <li class="username">
                        <?php echo htmlspecialchars($_SESSION['username']); ?>
                        <div class="dropdown-content">
                            <a href="edit_profile.php" class="edit-profile">Edit Profile</a>
                            <a href="transaction_history.php" class="transaction-history">Transaction History</a>
                            <a href="logout.php" class="logout">Log Out</a>
                            <a href="delete_account.php" class="delete-account">Delete Account</a>
                        </div>
                    </li>
                    <?php 
                    $sql = "SELECT amount FROM tokens WHERE user_id = ?";
                    $st = $conn->prepare($sql);
                    $st->bind_param("i", $_SESSION['user_id']);
                    $st->execute();
                    $st->bind_result($tokens);
                    $st->fetch();
                    $st->close(); ?>
                    <span class="tokens">Tokens: <?php echo htmlspecialchars($tokens); ?></span>
                <?php else: ?>
                    <li><a href="signup.php">Sign Up</a></li>
                    <li><a href="login.php">Login</a></li>
                <?php endif; ?>
            </ul>
        </nav>
    </header>
</body>
</html>
