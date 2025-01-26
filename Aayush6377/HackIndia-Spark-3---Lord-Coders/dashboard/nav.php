<!-- nav.php -->
<nav>
    <ul>
        <li><a href="dashboard.php">Dashboard</a></li>
        <li><a href="view_users.php">View Users</a></li>
        <li><a href="manage_campaigns.php">Manage Campaigns</a></li>
        <li><a href="create_admin.php">Create Admin</a></li>
        <li><a href="logout.php">Logout</a></li>
        <li class="admin-name"><?php echo $_SESSION['adminname']; ?></li>
    </ul>
</nav>

<style>
    nav {
        background-color: #2c3e50;
        padding: 10px 20px;
    }
    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    nav ul li {
        float: left;
    }
    nav ul li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;
        font-size: 16px;
        font-family: Arial, sans-serif;
    }
    nav ul li a:hover {
        background-color: #1abc9c;
    }
    .admin-name {
        float: right;
        color: white;
        padding: 14px 20px;
        font-size: 16px;
        font-family: Arial, sans-serif;
    }
</style>
