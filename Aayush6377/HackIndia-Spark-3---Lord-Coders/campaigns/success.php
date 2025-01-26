<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Campaign Submitted</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .container {
            text-align: center;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #fff;
        }
        h1 {
            color: #28a745;
        }
        p {
            margin: 20px 0;
            color: #333;
        }
    </style>
    <script>
        setTimeout(function() {
            window.location.href = '../campaigns.php';
        }, 2500); // Redirect after 5 seconds
    </script>
</head>
<body>
    <div class="container">
        <h1>Campaign Submitted Successfully!</h1>
        <p>Your campaign has been successfully submitted and will be reviewed shortly. You will be redirected to the campaigns page in a few seconds.</p>
    </div>
</body>
</html>
