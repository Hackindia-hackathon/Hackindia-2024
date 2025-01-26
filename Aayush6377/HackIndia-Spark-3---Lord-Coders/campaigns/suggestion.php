<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Suggest a Campaign</title>
    <style>
        /* Styles similar to previous template */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            width: 50%;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #4CAF50;
            text-align: center;
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        label {
            margin-bottom: 5px;
            font-weight: bold;
            align-self: flex-start;
        }
        input[type="text"], textarea, input[type="file"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Suggest a Campaign</h1>
        <form action="submit_campaign.php" method="POST" enctype="multipart/form-data">
            <label for="name">Campaign Name</label>
            <input type="text" id="name" name="name" required>

            <label for="description">Campaign Description</label>
            <textarea id="description" name="description" rows="5" required></textarea>

            <label for="target_tokens">Target Tokens</label>
            <input type="text" id="target_tokens" name="target_tokens" required>

            <label for="image">Upload Image</label>
            <input type="file" id="image" name="image" accept="image/*" required>

            <input type="submit" value="Submit Campaign">
        </form>
    </div>

</body>
</html>
