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

// Fetch transaction history for the logged-in user
$sql = "SELECT type, amount, description, created_at FROM token_transactions WHERE user_id = ? ORDER BY created_at DESC";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

// Handle errors if any
$errors = [];

if ($result->num_rows === 0) {
    $errors[] = "No transactions found.";
}

$stmt->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transaction History</title>
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
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
            background-color: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }

        h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #2e7d32; /* Dark green text */
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th, td {
            padding: 10px;
            border: 1px solid #ccc;
            text-align: left;
        }

        th {
            background-color: #43a047; /* Green background for headers */
            color: white;
        }

        tr:nth-child(even) {
            background-color: #f1f8e9; /* Light green for alternate rows */
        }

        tr:hover {
            background-color: #c8e6c9; /* Slightly darker green for hover */
        }

        p {
            font-size: 14px;
            text-align: center;
            color: #c62828; /* Red for errors */
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

            table {
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>GreenPath</h1>
    </header>
    
    <main>
        <h2>Transaction History</h2>

        <?php if (!empty($errors)): ?>
            <div>
                <?php foreach ($errors as $error): ?>
                    <p><?php echo htmlspecialchars($error); ?></p>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>

        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <?php while ($row = $result->fetch_assoc()): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($row['type']); ?></td>
                        <td><?php echo htmlspecialchars($row['amount']); ?></td>
                        <td><?php echo htmlspecialchars($row['description']); ?></td>
                        <td><?php echo htmlspecialchars(date('d-m-Y H:i:s', strtotime($row['created_at']))); ?></td>
                    </tr>
                <?php endwhile; ?>
            </tbody>
        </table>
    </main>
</body>
</html>

<?php $conn->close(); ?>
