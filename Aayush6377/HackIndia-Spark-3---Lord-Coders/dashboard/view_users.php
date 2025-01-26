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

// Pagination setup
$limit = 10; // Number of users per page
$page = isset($_GET['page']) ? intval($_GET['page']) : 1;
$offset = ($page - 1) * $limit;

// Fetch users with pagination
$stmt = $conn->prepare("SELECT * FROM users LIMIT ? OFFSET ?");
$stmt->bind_param("ii", $limit, $offset);
$stmt->execute();
$result = $stmt->get_result();

$users = [];
while ($row = $result->fetch_assoc()) {
    $users[] = $row;
}

$stmt->close();

// Count total users for pagination
$result = $conn->query("SELECT COUNT(*) AS total FROM users");
$total_users = $result->fetch_assoc()['total'];
$total_pages = ceil($total_users / $limit);

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Users</title>
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
        .user-list {
            margin-bottom: 20px;
        }
        .user-item {
            border-bottom: 1px solid #ddd;
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
        }
        .user-item a {
            color: #3498db;
            text-decoration: none;
        }
        .pagination {
            text-align: center;
        }
        .pagination a {
            margin: 0 5px;
            padding: 8px 16px;
            text-decoration: none;
            color: #3498db;
            border: 1px solid #3498db;
            border-radius: 4px;
        }
        .pagination a.active {
            background-color: #3498db;
            color: white;
            border: none;
        }
        .pagination a:hover {
            background-color: #ecf0f1;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>User List</h1>
    
    <div class="user-list">
        <?php foreach ($users as $user): ?>
            <div class="user-item">
                <div>
                    <strong><?php echo htmlspecialchars($user['username']); ?></strong><br>
                    <?php echo htmlspecialchars($user['email']); ?><br>
                    <?php echo htmlspecialchars($user['phone']); ?>
                </div>
                <div>
                    <a href="view_user_stories.php?user_id=<?php echo urlencode($user['id']); ?>">View Stories</a>
                </div>
            </div>
        <?php endforeach; ?>
    </div>

    <div class="pagination">
        <?php if ($page > 1): ?>
            <a href="?page=<?php echo $page - 1; ?>">Previous</a>
        <?php endif; ?>

        <?php for ($i = 1; $i <= $total_pages; $i++): ?>
            <a href="?page=<?php echo $i; ?>" class="<?php echo $i == $page ? 'active' : ''; ?>"><?php echo $i; ?></a>
        <?php endfor; ?>

        <?php if ($page < $total_pages): ?>
            <a href="?page=<?php echo $page + 1; ?>">Next</a>
        <?php endif; ?>
    </div>
</div>

</body>
</html>
