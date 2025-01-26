import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ScrollView, Text, View } from 'react-native';
import { Line, Bar } from 'react-chartjs-2';
import { 
  Typography, Paper, CircularProgress, Box, Container, Grid, Button,
  Card, CardContent, CardActions, IconButton, Tooltip, CssBaseline,
  Tab, Tabs
} from '@material-ui/core';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { 
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, 
  LineElement, BarElement, Title, Tooltip as ChartTooltip, Legend 
} from 'chart.js';
import { TrendingUp, TrendingDown, Refresh, Timeline, BarChart } from '@material-ui/icons';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, ChartTooltip, Legend);

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#BB86FC',
    },
    secondary: {
      main: '#03DAC6',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#B0B0B0',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
  },
  title: {
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
  cryptoCard: {
    backgroundColor: theme.palette.background.paper,
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 5px 15px rgba(187, 134, 252, 0.3)',
    },
  },
  cardContent: {
    textAlign: 'center',
  },
  cryptoName: {
    color: theme.palette.text.primary,
  },
  cryptoPrice: {
    color: theme.palette.text.secondary,
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  priceChange: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
  },
  chartContainer: {
    height: 400,
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0 3px 5px 2px rgba(187, 134, 252, .3)',
  },
  refreshButton: {
    marginTop: theme.spacing(2),
  },
  viewButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover': {
      background: 'linear-gradient(45deg, #FE8B8B 30%, #FFAE73 90%)',
    },
  },
}));

const CryptoTrackingPage = () => {
  const classes = useStyles();
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [chartType, setChartType] = useState('price');

  const cryptos = ['bitcoin', 'ethereum', 'binancecoin', 'ripple', 'cardano'];

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const fetchCryptoData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${cryptos.join(',')}&order=market_cap_desc&per_page=5&page=1&sparkline=true&price_change_percentage=1h,24h,7d`);
      setCryptoData(response.data);
      setSelectedCrypto(response.data[0].id);
    } catch (error) {
      console.error('Error fetching crypto data:', error);
      setError('Failed to fetch crypto data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  const getChartData = (crypto) => {
    if (chartType === 'price') {
      return {
        labels: [...Array(168).keys()].map(i => `Hour ${i + 1}`),
        datasets: [
          {
            label: `${crypto.name} Price (USD)`,
            data: crypto.sparkline_in_7d.price,
            fill: true,
            backgroundColor: 'rgba(187, 134, 252, 0.2)',
            borderColor: 'rgba(187, 134, 252, 1)',
            tension: 0.1,
          },
        ],
      };
    } else if (chartType === 'priceChange') {
      return {
        labels: ['1h', '24h', '7d'],
        datasets: [
          {
            label: `${crypto.name} Price Change %`,
            data: [
              crypto.price_change_percentage_1h_in_currency,
              crypto.price_change_percentage_24h_in_currency,
              crypto.price_change_percentage_7d_in_currency,
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: chartType === 'price' ? 'Price History (Last 7 Days)' : 'Price Change Percentage',
        color: darkTheme.palette.text.primary,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: chartType === 'price' ? 'Time' : 'Period',
          color: darkTheme.palette.text.secondary,
        },
        ticks: {
          color: darkTheme.palette.text.secondary,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        title: {
          display: true,
          text: chartType === 'price' ? 'Price (USD)' : 'Change (%)',
          color: darkTheme.palette.text.secondary,
        },
        ticks: {
          color: darkTheme.palette.text.secondary,
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      }
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container className={classes.root}>
        <Typography variant="h4" className={classes.title}>Cryptocurrency Tracking</Typography>
        <Grid container spacing={3}>
          {cryptoData.map((crypto) => (
            <Grid item xs={12} sm={6} md={4} key={crypto.id}>
              <Card className={classes.cryptoCard}>
                <CardContent className={classes.cardContent}>
                  <Typography variant="h6" className={classes.cryptoName}>{crypto.name}</Typography>
                  <Typography variant="h5" className={classes.cryptoPrice}>
                    ${crypto.current_price.toFixed(2)}
                  </Typography>
                  <Box className={classes.priceChange}>
                    {crypto.price_change_percentage_24h > 0 ? (
                      <TrendingUp style={{ color: '#4caf50' }} />
                    ) : (
                      <TrendingDown style={{ color: '#f44336' }} />
                    )}
                    <Typography 
                      variant="body2" 
                      style={{ color: crypto.price_change_percentage_24h > 0 ? '#4caf50' : '#f44336' }}
                    >
                      {crypto.price_change_percentage_24h.toFixed(2)}%
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button 
                    fullWidth 
                    className={classes.viewButton}
                    onClick={() => setSelectedCrypto(crypto.id)}
                  >
                    View Charts
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {selectedCrypto && (
          <Paper className={classes.chartContainer}>
            <Tabs
              value={chartType}
              onChange={(event, newValue) => setChartType(newValue)}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab icon={<Timeline />} label="Price History" value="price" />
              <Tab icon={<BarChart />} label="Price Change %" value="priceChange" />
            </Tabs>
            {chartType === 'price' ? (
              <Line 
                data={getChartData(cryptoData.find(c => c.id === selectedCrypto))} 
                options={chartOptions} 
              />
            ) : (
              <Bar
                data={getChartData(cryptoData.find(c => c.id === selectedCrypto))}
                options={chartOptions}
              />
            )}
          </Paper>
        )}
        <Box display="flex" justifyContent="center">
          <Tooltip title="Refresh Data">
            <IconButton 
              color="primary" 
              onClick={fetchCryptoData} 
              className={classes.refreshButton}
            >
              <Refresh />
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CryptoTrackingPage;