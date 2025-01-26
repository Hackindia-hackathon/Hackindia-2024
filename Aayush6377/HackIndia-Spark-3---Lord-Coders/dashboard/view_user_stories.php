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

// Fetch user stories
$user_id = isset($_GET['user_id']) ? $_GET['user_id'] : '';
if (empty($user_id)) {
    echo "No username provided.";
    exit();
}

$stmt = $conn->prepare("SELECT * FROM user_stories WHERE user_id = ?");
$stmt->bind_param("s", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$stories = [];
while ($row = $result->fetch_assoc()) {
    $stories[] = $row;
}

$stmt->close();

$stmt = $conn->prepare("SELECT username FROM users WHERE id = ?");
$stmt->bind_param("s", $user_id);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($username);
$stmt->fetch();

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Stories</title>
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
        .story-item {
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
        }
        .story-item p {
            margin: 5px 0;
        }
        .back-button {
            display: inline-block;
            padding: 10px 20px;
            text-decoration: none;
            color: white;
            background-color: #3498db;
            border-radius: 4px;
            font-weight: bold;
        }
        .back-button:hover {
            background-color: #2980b9;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Stories by <?php echo htmlspecialchars($username); ?></h1>
    
    <?php if (empty($stories)): ?>
        <p>No stories available for this user.</p>
    <?php else: ?>
        <?php foreach ($stories as $story): ?>
            <div class="story-item">
                <h2>Story ID: <?php echo htmlspecialchars($story['id']); ?></h2>
                <p><?php echo nl2br(htmlspecialchars($story['story'])); ?></p>
                <p><small>Posted on: <?php echo htmlspecialchars($story['created_at']); ?></small></p>
            </div>
        <?php endforeach; ?>
    <?php endif; ?>
    
    <a href="view_users.php" class="back-button">Back to Users</a>
</div>

</body>
</html>
