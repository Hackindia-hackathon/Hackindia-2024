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

// Handle campaign approval/rejection
if (isset($_GET['campaign_id']) && isset($_GET['status'])) {
    $campaign_id = intval($_GET['campaign_id']);
    $status = $_GET['status'] == 'active' ? 'active' : 'rejected';

    $stmt = $conn->prepare("UPDATE donation_campaigns SET status = ?, approved_at = NOW() WHERE id = ?");
    $stmt->bind_param("si", $status, $campaign_id);

    if ($stmt->execute()) {
        $message = "Campaign has been " . ($status == 'active' ? 'approved' : 'rejected') . " successfully.";
    } else {
        $error = "Error updating campaign: " . $stmt->error;
    }

    $stmt->close();
}

// Fetch campaigns by status
$pending_campaigns = $conn->query("SELECT * FROM donation_campaigns WHERE status = 'pending'");
$accepted_campaigns = $conn->query("SELECT * FROM donation_campaigns WHERE status = 'active'");
$rejected_campaigns = $conn->query("SELECT * FROM donation_campaigns WHERE status = 'rejected'");
$completed_campaigns = $conn->query("SELECT * FROM donation_campaigns WHERE status = 'completed'");

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Donation Campaigns</title>
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
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #3498db;
            color: white;
        }
        form {
            display: inline-block;
        }
        .message {
            margin-bottom: 15px;
            font-size: 14px;
        }
        .message.error {
            color: red;
        }
        .message.success {
            color: green;
        }
        .action-buttons {
            display: flex;
            gap: 10px;
        }
        .action-buttons a {
            padding: 6px 12px;
            border-radius: 4px;
            text-decoration: none;
            font-size: 14px;
            display: inline-block;
            cursor: pointer;
        }
        .action-buttons a.accept {
            background-color: #2ecc71;
            color: white;
        }
        .action-buttons a.reject {
            background-color: #e74c3c;
            color: white;
        }
        .action-buttons a:hover {
            opacity: 0.8;
        }
        a.view-more {
            background-color: #3498db;
            color: white;
            padding: 6px 12px;
            border-radius: 4px;
            text-decoration: none;
            display: inline-block;
            font-size: 14px;
        }
        a.view-more:hover {
            opacity: 0.8;
        }
        .delete-button {
            background-color: #e74c3c;
            color: white;
            padding: 6px 12px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            text-decoration: none;
        }
        .delete-button:hover {
            opacity: 0.8;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>Manage Donation Campaigns</h1>

    <?php if (isset($error)): ?>
        <div class="message error"><?php echo $error; ?></div>
    <?php endif; ?>

    <?php if (isset($message)): ?>
        <div class="message success"><?php echo $message; ?></div>
    <?php endif; ?>

    <h2>Pending Campaigns</h2>
    <?php if ($pending_campaigns->num_rows > 0): ?>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Target Tokens</th>
                <th>Current Tokens</th>
                <th>Actions</th>
            </tr>
            <?php while($row = $pending_campaigns->fetch_assoc()): ?>
                <tr>
                    <td><?php echo $row['id']; ?></td>
                    <td><?php echo $row['name']; ?></td>
                    <td><?php echo $row['target_tokens']; ?></td>
                    <td><?php echo $row['current_tokens']; ?></td>
                    <td>
                        <div class="action-buttons">
                            <a class="accept" href="manage_campaigns.php?campaign_id=<?php echo $row['id']; ?>&status=active">Accept</a>
                            <a class="reject" href="manage_campaigns.php?campaign_id=<?php echo $row['id']; ?>&status=rejected">Reject</a>
                            <a class="view-more" href="view_more.php?id=<?php echo $row['id']; ?>">View More</a>
                        </div>
                    </td>
                </tr>
            <?php endwhile; ?>
        </table>
    <?php else: ?>
        <p>No pending campaigns.</p>
    <?php endif; ?>

    <h2>Accepted Campaigns</h2>
    <?php if ($accepted_campaigns->num_rows > 0): ?>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Target Tokens</th>
                <th>Current Tokens</th>
                <th>Approved At</th>
                <th>Actions</th>
            </tr>
            <?php while($row = $accepted_campaigns->fetch_assoc()): ?>
                <tr>
                    <td><?php echo $row['id']; ?></td>
                    <td><?php echo $row['name']; ?></td>
                    <td><?php echo $row['target_tokens']; ?></td>
                    <td><?php echo $row['current_tokens']; ?></td>
                    <td><?php echo $row['approved_at']; ?></td>
                    <td>
                        <a class="view-more" href="view_more.php?id=<?php echo $row['id']; ?>">View More</a>
                    </td>
                </tr>
            <?php endwhile; ?>
        </table>
    <?php else: ?>
        <p>No accepted campaigns.</p>
    <?php endif; ?>

    <h2>Rejected Campaigns</h2>
    <?php if ($rejected_campaigns->num_rows > 0): ?>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Target Tokens</th>
                <th>Current Tokens</th>
                <th>Approved At</th>
                <th>Actions</th>
            </tr>
            <?php while($row = $rejected_campaigns->fetch_assoc()): ?>
                <tr>
                    <td><?php echo $row['id']; ?></td>
                    <td><?php echo $row['name']; ?></td>
                    <td><?php echo $row['target_tokens']; ?></td>
                    <td><?php echo $row['current_tokens']; ?></td>
                    <td><?php echo $row['approved_at']; ?></td>
                    <td>
                        <a class="delete-button" href="delete.php?id=<?php echo $row['id']; ?>">Delete</a>
                        <a class="view-more" href="view_more.php?id=<?php echo $row['id']; ?>">View More</a>
                    </td>
                </tr>
            <?php endwhile; ?>
        </table>
    <?php else: ?>
        <p>No rejected campaigns.</p>
    <?php endif; ?>

    <h2>Completed Campaigns</h2>
    <?php if ($completed_campaigns->num_rows > 0): ?>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Target Tokens</th>
                <th>Current Tokens</th>
                <th>Completed At</th>
                <th>Actions</th>
            </tr>
            <?php while($row = $completed_campaigns->fetch_assoc()): ?>
                <tr>
                    <td><?php echo $row['id']; ?></td>
                    <td><?php echo $row['name']; ?></td>
                    <td><?php echo $row['target_tokens']; ?></td>
                    <td><?php echo $row['current_tokens']; ?></td>
                    <td><?php echo $row['approved_at']; ?></td>
                    <td>
                        <a class="delete-button" href="delete.php?id=<?php echo $row['id']; ?>">Delete</a>
                        <a class="view-more" href="view_more.php?id=<?php echo $row['id']; ?>">View More</a>
                    </td>
                </tr>
            <?php endwhile; ?>
        </table>
    <?php else: ?>
        <p>No completed campaigns.</p>
    <?php endif; ?>
</div>

</body>
</html>