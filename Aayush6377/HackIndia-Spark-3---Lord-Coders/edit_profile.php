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

// Fetch the current user data
$user_id = $_SESSION['user_id'];
$sql = "SELECT name, username, email, phone FROM users WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$stmt->bind_result($name, $username, $email, $phone);
$stmt->fetch();
$stmt->close();

// Handle form submission
$errors = [];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $new_name = trim($_POST['name']);
    $new_username = trim($_POST['username']);
    $new_email = trim($_POST['email']);
    $new_phone = trim($_POST['phone']);

    // Validate form data
    if (empty($new_name)) {
        $errors[] = "Name is required.";
    }
    if (empty($new_username)) {
        $errors[] = "Username is required.";
    }
    if (empty($new_email) || !filter_var($new_email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "A valid email address is required.";
    }
    if (empty($new_phone)) {
        $errors[] = "Phone number is required.";
    } elseif (!preg_match("/^\d{10}$/", $new_phone)) {
        $errors[] = "Phone number must be exactly 10 digits.";
    }

    // Check if the username or email is already taken by another user
    if (empty($errors)) {
        $sql = "SELECT id FROM users WHERE (username = ? OR email = ?) AND id != ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssi", $new_username, $new_email, $user_id);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $errors[] = "Username or email is already taken.";
        } else {
            // Update the user's profile information
            $sql = "UPDATE users SET name = ?, username = ?, email = ?, phone = ? WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("ssssi", $new_name, $new_username, $new_email, $new_phone, $user_id);
            if ($stmt->execute()) {
                $_SESSION['username'] = $new_username;
                header("Location: edit_profile.php?success=1");
                exit();
            } else {
                $errors[] = "Failed to update profile. Please try again.";
            }
        }
        $stmt->close();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Profile</title>
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
            max-width: 600px;
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

        form {
            display: flex;
            flex-direction: column;
        }

        label {
            font-weight: bold;
            margin-bottom: 5px;
            color: #1b5e20; /* Darker green */
        }

        input[type="text"],
        input[type="email"] {
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }

        input[type="text"]:focus,
        input[type="email"]:focus {
            border-color: #66bb6a; /* Green border on focus */
            outline: none;
            box-shadow: 0 0 8px rgba(102, 187, 106, 0.2); /* Light green shadow */
        }

        button[type="submit"] {
            background-color: #43a047; /* Green button */
            color: white;
            padding: 12px;
            border: none;
            border-radius: 4px;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button[type="submit"]:hover {
            background-color: #2e7d32; /* Darker green on hover */
        }

        p {
            font-size: 14px;
            text-align: center;
            color: #c62828; /* Red for errors */
        }

        p[style="color: green;"] {
            color: #388e3c; /* Green for success */
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

            h2 {
                font-size: 22px;
            }

            input[type="text"],
            input[type="email"] {
                font-size: 14px;
            }

            button[type="submit"] {
                font-size: 16px;
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>GreenPath</h1>
    </header>
    
    <main>
        <h2>Edit Profile</h2>

        <?php if (isset($_GET['success'])): ?>
            <p style="color: green;">Profile updated successfully!</p>
        <?php endif; ?>

        <?php if (!empty($errors)): ?>
            <div style="color: red;">
                <?php foreach ($errors as $error): ?>
                    <p><?php echo htmlspecialchars($error); ?></p>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>

        <form action="edit_profile.php" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="<?php echo htmlspecialchars($name); ?>" required>

            <label for="username">Username:</label>
            <input type="text" id="username" name="username" value="<?php echo htmlspecialchars($username); ?>" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value="<?php echo htmlspecialchars($email); ?>" required>

            <label for="phone">Phone:</label>
            <input type="text" id="phone" name="phone" value="<?php echo htmlspecialchars($phone); ?>" required>

            <button type="submit">Update Profile</button>
        </form>
    </main>

    <footer>
        <p>&copy; 2024 GreenPath. All rights reserved.</p>
    </footer>
</body>
</html>

<?php $conn->close(); ?>
