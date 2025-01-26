import React from 'react';
import { 
  Box, Container, Grid, Paper, Typography, Avatar, List, 
  ListItem, ListItemIcon, ListItemText, Divider, IconButton,
  AppBar, Toolbar, Badge
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Person as UserIcon,
  ShoppingCart as ProductIcon,
  Book as BlogIcon,
  ExitToApp as LoginIcon,
  Error as NotFoundIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
  Language as LanguageIcon
} from '@mui/icons-material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const AdminDashboard = () => {
  const chartData = [
    { name: '2003', TeamA: 22, TeamB: 34, TeamC: 29 },
    { name: 'Feb \'03', TeamA: 11, TeamB: 33, TeamC: 25 },
    { name: 'Mar \'03', TeamA: 20, TeamB: 52, TeamC: 35 },
    { name: 'Apr \'03', TeamA: 25, TeamB: 65, TeamC: 29 },
    { name: 'May \'03', TeamA: 12, TeamB: 22, TeamC: 45 },
    { name: 'Jun \'03', TeamA: 20, TeamB: 39, TeamC: 35 },
    { name: 'Jul \'03', TeamA: 37, TeamB: 20, TeamC: 62 },
    { name: 'Aug \'03', TeamA: 20, TeamB: 53, TeamC: 55 },
    { name: 'Sep \'03', TeamA: 44, TeamB: 58, TeamC: 60 },
    { name: 'Oct \'03', TeamA: 21, TeamB: 30, TeamC: 37 },
  ];

  const pieData = [
    { name: 'America', value: 27.7 },
    { name: 'Asia', value: 34.7 },
    { name: 'Europe', value: 9.2 },
    { name: 'Africa', value: 28.4 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Paper sx={{ width: 240, minHeight: '100vh', borderRadius: 0 }}>
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar src="/path-to-avatar.jpg" />
          <Typography variant="subtitle1">Jaydon Frankie</Typography>
        </Box>
        <Divider />
        <List>
          {[
            { text: 'Dashboard', icon: <DashboardIcon /> },
            { text: 'User', icon: <UserIcon /> },
            { text: 'Product', icon: <ProductIcon /> },
            { text: 'Blog', icon: <BlogIcon /> },
            { text: 'Login', icon: <LoginIcon /> },
            { text: 'Not Found', icon: <NotFoundIcon /> },
          ].map((item, index) => (
            <ListItem button key={item.text}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="default" elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hi, Welcome back 👋
            </Typography>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <LanguageIcon />
            </IconButton>
            <IconButton>
              <Badge badgeContent={2} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Avatar sx={{ ml: 2 }} />
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Stats */}
            {[
              { title: 'Weekly Sales', value: '714k', color: '#4caf50' },
              { title: 'New Users', value: '1.35m', color: '#2196f3' },
              { title: 'Item Orders', value: '1.72m', color: '#ff9800' },
              { title: 'Bug Reports', value: '234', color: '#f44336' },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: item.color, width: 56, height: 56, mb: 1 }}>
                    {/* You can add specific icons here */}
                  </Avatar>
                  <Typography component="h2" variant="h4">
                    {item.value}
                  </Typography>
                  <Typography color="text.secondary">{item.title}</Typography>
                </Paper>
              </Grid>
            ))}

            {/* Line Chart */}
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Website Visits
                </Typography>
                <Typography variant="subtitle2" gutterBottom color="text.secondary">
                  (+43%) than last year
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="TeamA" stroke="#8884d8" />
                    <Line type="monotone" dataKey="TeamB" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="TeamC" stroke="#ffc658" />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>

            {/* Pie Chart */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Current Visits
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AdminDashboard;