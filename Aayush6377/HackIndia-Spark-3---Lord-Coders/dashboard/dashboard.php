<?php
session_start();

// Check if the admin is logged in
if (!isset($_SESSION['admin_id'])) {
    header('Location: login.php');
    exit();
}

include 'nav.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #ecf0f1;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 90%;
            max-width: 1200px;
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
        .section {
            margin-top: 30px;
        }
        .section h2 {
            color: #34495e;
            margin-bottom: 10px;
            font-size: 20px;
        }
        .section a {
            display: inline-block;
            margin: 10px 0;
            padding: 10px 20px; /* Adjusted padding */
            background-color: #3498db;
            color: white;
            text-align: center;
            text-decoration: none;
            border-radius: 6px;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }
        .section a:hover {
            background-color: #2980b9;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Welcome, <?php echo $_SESSION['adminname']; ?>!</h1>

    <div class="section">
        <h2>Users</h2>
        <a href="view_users.php">View All Users</a>
    </div>

    <div class="section">
        <h2>Campaigns</h2>
        <a href="manage_campaigns.php">Manage Campaigns</a>
    </div>

    <div class="section">
        <h2>Admins</h2>
        <a href="create_admin.php">Create New Admin</a>
    </div>
</div>

</body>
</html>
