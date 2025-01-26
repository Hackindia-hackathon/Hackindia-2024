<?php
include 'db.php';
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: ../login.php'); // Redirect to login page if not logged in
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $story = $_POST['story'];
    $user_id = $_SESSION['user_id'];

    $stmt = $conn->prepare("SELECT username FROM users WHERE id = ?");
    $stmt->bind_param("s", $user_id);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($username);
    $stmt->fetch();

    // Insert story
    $stmt = $conn->prepare("INSERT INTO user_stories (user_id, username, story, created_at) VALUES (?, ?, ?, NOW())");
    $stmt->bind_param("sss", $user_id, $username, $story);
    $stmt->execute();
    $stmt->close();

    //update tokens
    $sql = "UPDATE tokens SET amount = amount + 5 WHERE user_id = $user_id";
    $conn->query($sql);

    // Insert transaction history
    $stmt = $conn->prepare("INSERT INTO token_transactions (user_id, type, amount, description, created_at) VALUES (?, 'earn', 5, 'Share Your Story Activity Reward', NOW())");
    $stmt->bind_param("s", $user_id);
    $stmt->execute();
    $stmt->close();

    header("Location: ../community.php");
}
?>
