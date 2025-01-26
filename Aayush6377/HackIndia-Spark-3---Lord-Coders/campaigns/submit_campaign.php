<?php
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

// Get form data
$name = $_POST['name'];
$description = $_POST['description'];
$target_tokens = $_POST['target_tokens'];
$image = $_FILES['image'];

// Get the next campaign ID
$sql = "SELECT MAX(id) AS max_id FROM donation_campaigns";
$result = $conn->query($sql);

// Check if result is valid and fetch data
if ($result) {
    $row = $result->fetch_assoc();
    $next_id = $row['max_id'] ? $row['max_id'] + 1 : 1; // Set next_id to 1 if table is empty
} else {
    $next_id = 1; // Set next_id to 1 if query fails
}

// Set the target directory and file path
$target_dir = "img/";
$image_path = $target_dir . $next_id . ".png";
$actual_path = "campaigns/img/" . $next_id . ".png";

// Create the directory if it does not exist
if (!is_dir($target_dir)) {
    mkdir($target_dir, 0755, true);
}

// Move the uploaded file to the target directory
if (move_uploaded_file($image['tmp_name'], $image_path)) {
    // Insert campaign data into the database
    $stmt = $conn->prepare("INSERT INTO donation_campaigns (id, name, description, target_tokens, image_url, status) VALUES (?, ?, ?, ?, ?, 'pending')");
    $stmt->bind_param("issis", $next_id, $name, $description, $target_tokens, $actual_path);

    if ($stmt->execute()) {
        header("Location: success.php");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Sorry, there was an error uploading your file.";
}

$conn->close();
?>
