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

// Delete campaign
if (isset($_GET['id'])) {
    $campaign_id = intval($_GET['id']);

    // Fetch the image URL before deleting the record
    $stmt = $conn->prepare("SELECT image_url FROM donation_campaigns WHERE id = ?");
    $stmt->bind_param("i", $campaign_id);
    $stmt->execute();
    $stmt->bind_result($image_url);
    $stmt->fetch();
    $stmt->close();

    $actual_url="../".$image_url;
    unlink($actual_url);

    // Delete the campaign record from the database
    $stmt = $conn->prepare("DELETE FROM donation_campaigns WHERE id = ?");
    $stmt->bind_param("i", $campaign_id);

    if ($stmt->execute()) {
        $message = "Campaign deleted successfully.";
    } else {
        $error = "Error deleting campaign: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
header('Location: manage_campaigns.php');
exit();
?>
