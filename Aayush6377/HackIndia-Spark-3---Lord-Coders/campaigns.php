<?php
include 'nav.php';
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php'); // Redirect to login page if not logged in
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Donation Campaigns</title>
    <style>
        /* General Styles */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 80%;
            margin: 20px auto;
        }
        /* Campaign Card Styles */
        .campaign-card {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
            padding: 20px;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .campaign-card img {
            width: 150px;
            height: 150px;
            border-radius: 10px;
            margin-right: 20px;
        }
        .campaign-content {
            flex-grow: 1;
        }
        .campaign-title {
            font-size: 24px;
            color: #333;
        }
        .campaign-description {
            font-size: 16px;
            color: #666;
            margin: 10px 0;
        }
        .campaign-details {
            font-size: 14px;
            color: #999;
            margin: 5px 0;
        }
        .campaign-actions {
            display: flex;
            align-items: center;
            margin-top: 15px;
        }
        .campaign-actions a {
            margin-right: 10px;
        }
        .campaign-actions img {
            width: 24px;
            height: 24px;
            vertical-align: middle;
        }
        .campaign-actions .donate-btn {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 14px;
        }
        .campaign-actions .donate-btn:hover {
            background-color: #45a049;
        }
        /* Pagination Styles */
        .pagination {
            margin-top: 20px;
            text-align: center;
        }
        .pagination a {
            color: #4CAF50;
            padding: 8px 16px;
            text-decoration: none;
            border: 1px solid #ddd;
            margin: 0 4px;
            border-radius: 5px;
        }
        .pagination a:hover {
            background-color: #4CAF50;
            color: white;
        }
        .suggest-campaign-btn {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 18px;
            display: inline-block;
            transition: background-color 0.3s;
        }
        .suggest-campaign-btn:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <!-- Campaigns Container -->
    <div class="container">
        <h1>Donation Campaigns</h1>

        <?php
        // Database connection
        $conn = new mysqli('localhost', 'root', '', 'GreenPath');

        // Pagination setup
        $limit = 5; // Number of campaigns per page
        $page = isset($_GET['page']) ? $_GET['page'] : 1;
        $offset = ($page - 1) * $limit;

        // Fetch campaigns with pagination
        $sql = "SELECT * FROM donation_campaigns WHERE status = 'active' ORDER BY likes DESC, created_at DESC LIMIT $limit OFFSET $offset";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while ($campaign = $result->fetch_assoc()) {
                // Check if the current user has liked the campaign
                $user_id = $_SESSION['user_id'];
                $like_check_sql = "SELECT * FROM campaign_likes WHERE user_id = $user_id AND campaign_id = ".$campaign['id'];
                $like_check_result = $conn->query($like_check_sql);
                $liked = $like_check_result->num_rows > 0;

                echo '<div class="campaign-card">';
                echo '<img src="'.htmlspecialchars($campaign['image_url']).'" alt="Campaign Image">';
                echo '<div class="campaign-content">';
                echo '<h2 class="campaign-title">'.htmlspecialchars($campaign['name']).'</h2>';
                echo '<p class="campaign-description">'.htmlspecialchars($campaign['description']).'</p>';
                echo '<p class="campaign-details">Target Tokens: '.htmlspecialchars($campaign['target_tokens']).' | Current Tokens: '.htmlspecialchars($campaign['current_tokens']).'</p>';
                echo '<p class="campaign-details">Likes: '.htmlspecialchars($campaign['likes']).'</p>';
                echo '<div class="campaign-actions">';
                echo '<a href="campaigns/like_campaign.php?campaign_id='.$campaign['id'].'">';
                echo '<img src="img/'.($liked ? 'like.png' : 'unlike.png').'" alt="'.($liked ? 'Liked' : 'Like').'">';
                echo '</a>';
                echo '<a href="campaigns/donate_tokens.php?campaign_id='.$campaign['id'].'" class="donate-btn">Donate Tokens</a>';
                echo '</div>';
                echo '</div>';
                echo '</div>';
            }
        } else {
            echo '<p>No active campaigns at the moment.</p>';
        }

        // Fetch total number of campaigns
        $totalCampaignsSql = "SELECT COUNT(*) AS total FROM donation_campaigns WHERE status = 'active'";
        $totalResult = $conn->query($totalCampaignsSql);
        $totalCampaigns = $totalResult->fetch_assoc()['total'];
        $totalPages = ceil($totalCampaigns / $limit);

        // Pagination Links
        if ($totalPages > 1) {
            echo '<div class="pagination">';
            for ($i = 1; $i <= $totalPages; $i++) {
                echo '<a href="?page='.$i.'"'.($i == $page ? ' style="background-color: #4CAF50; color: white;"' : '').'>'.$i.'</a>';
            }
            echo '</div>';
        }

        $conn->close();
        ?>

        <!-- Suggest a Campaign Button -->
        <div style="text-align: center; margin-top: 30px;">
            <a href="campaigns/suggestion.php" class="suggest-campaign-btn">Suggest a Campaign</a>
        </div>
    </div>
</body>
</html>
