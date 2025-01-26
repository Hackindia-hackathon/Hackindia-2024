<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: ../login.php');
    exit();
}

if (isset($_GET['campaign_id'])) {
    // Database connection
    $conn = new mysqli('localhost', 'root', '', 'GreenPath');

    $campaign_id = intval($_GET['campaign_id']);
    $user_id = $_SESSION['user_id'];

    // Check if the user has already liked the campaign
    $check_like = $conn->query("SELECT * FROM campaign_likes WHERE user_id = $user_id AND campaign_id = $campaign_id");

    if ($check_like->num_rows > 0) {
        // Unlike: Remove the like
        $conn->query("DELETE FROM campaign_likes WHERE user_id = $user_id AND campaign_id = $campaign_id");
        // Update the likes count in the campaigns table
        $conn->query("UPDATE donation_campaigns SET likes = likes - 1 WHERE id = $campaign_id");
    } else {
        // Like: Insert like into the database
        $conn->query("INSERT INTO campaign_likes (user_id, campaign_id) VALUES ($user_id, $campaign_id)");
        // Update the likes count in the campaigns table
        $conn->query("UPDATE donation_campaigns SET likes = likes + 1 WHERE id = $campaign_id");
    }

    $conn->close();

    // Redirect back to the campaigns page
    header('Location: ../campaigns.php'); // Update the path if necessary
    exit();
}
