import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetTrendingCoinsQuery, useGetCoinListQuery } from '../config/cryptoApiSlice';
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
  Paper,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { TrendingUp, TrendingDown, Search, ArrowForward, ArrowBack } from '@mui/icons-material';
import { styled } from '@mui/system';
import RocketLaunch from '@mui/icons-material/RocketLaunch';
import wallet2 from '../assets/images/wallet2.jpg';

const GradientBackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  color: 'white',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const BuySell = () => {
  const { data: trendingData, isLoading: isTrendingLoading, error: trendingError } = useGetTrendingCoinsQuery('usd');
  const { data: coinList, isLoading: isCoinListLoading, error: coinListError } = useGetCoinListQuery('usd');

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const itemsPerPage = 10;
  const [carouselIndex, setCarouselIndex] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleCarouselMove = (direction) => {
    if (direction === 'next') {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % trendingData.length);
    } else {
      setCarouselIndex((prevIndex) => (prevIndex - 1 + trendingData.length) % trendingData.length);
    }
  };

  if (isTrendingLoading || isCoinListLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress style={{ color: '#667eea' }} />
      </Box>
    );
  }

  if (trendingError || coinListError) {
    return (
      <Typography color="error" align="center">
        Error fetching data: {trendingError?.message || coinListError?.message}
      </Typography>
    );
  }

  const filteredCoins = coinList.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const displayCoins = filteredCoins.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <React.Fragment>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: { xs: '40px 20px', md: '80px 20px' },
          borderRadius: '0 0 50% 50% / 4%',
        }}
      >
        <Box maxWidth="lg" mx="auto">
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  marginBottom: 2,
                }}
              >
               Explore the Crypto Market
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: '1.1rem', sm: '1.3rem' },
                  marginBottom: 4,
                  opacity: 0.8,
                }}
              >
                Explore Live Cryptocurrency Markets
              </Typography>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/markets"
                sx={{
                  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                  border: 0,
                  borderRadius: 3,
                  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                  color: 'white',
                  height: 48,
                  padding: '0 30px',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #FE8B8B 30%, #FFAE53 90%)',
                  },
                }}
              >
                <RocketLaunch /> Login to Safety
              </Button>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
  sx={{
    backgroundImage: `url(${wallet2})`, // Using imported logoImage
    height: { xs: '300px', md: '500px' },
    width: { xs: '450px', md: '500px' },
    transition: 'transform 0.3s ease',
    borderRadius: '16px',
    objectFit: 'cover',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  }}
/>


            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Market Section */}
      <Box sx={{ maxWidth: 1200, margin: '0 auto', padding: 0, background: 'whitesmoke' }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#667eea', fontWeight: 'bold', marginTop: '40px' }}>
          Cryptocurrency Market
        </Typography>

        <GradientBackground>
          <Typography variant="h6" gutterBottom>
            Trending Coins
          </Typography>
          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <Grid container spacing={2} wrap="nowrap" style={{ transform: `translateX(-${carouselIndex * (100 / (isMobile ? 1 : 4))}%)`, transition: 'transform 0.5s ease' }}>
              {trendingData.map((coin) => (
                <Grid item key={coin.id} xs={12} sm={6} md={3}>
                  <StyledCard>
                    <CardContent>
                      <Box display="flex" flexDirection="column" alignItems="center">
                        <img src={coin.image} alt={coin.name} height="50" style={{ marginBottom: 8 }} />
                        <Typography variant="subtitle2">
                          {coin.symbol.toUpperCase()}
                        </Typography>
                        <Typography
                          variant="body2"
                          color={coin.price_change_percentage_24h >= 0 ? '#4caf50' : '#f44336'}
                          sx={{ display: 'flex', alignItems: 'center' }}
                        >
                          {coin.price_change_percentage_24h >= 0 ? <TrendingUp fontSize="small" /> : <TrendingDown fontSize="small" />}
                          {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                        </Typography>
                        <Typography variant="body1" fontWeight="bold">
                          ${coin.current_price.toFixed(2)}
                        </Typography>
                      </Box>
                    </CardContent>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
            <IconButton
              onClick={() => handleCarouselMove('prev')}
              sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.3)' }}
            >
              <ArrowBack />
            </IconButton>
            <IconButton
              onClick={() => handleCarouselMove('next')}
              sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', bgcolor: 'rgba(255,255,255,0.3)' }}
            >
              <ArrowForward />
            </IconButton>
          </Box>
        </GradientBackground>

        <Paper elevation={3} sx={{ p: 3, bgcolor: '#f5f5f5' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#667eea' }}>
            Buy/Sell Coins
          </Typography>
          <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                placeholder="Search for a cryptocurrency..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: <Search sx={{ marginRight: 1, color: 'gray' }} />,
                }}
              />
            </Grid>
          </Grid>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Coin</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">24h Change</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayCoins.map((coin) => (
                  <TableRow key={coin.id}>
                    <TableCell>
                      <Box display="flex" alignItems="center">
                        <img src={coin.image} alt={coin.name} height="25" style={{ marginRight: 10 }} />
                        <Typography variant="body2">{coin.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">${coin.current_price.toFixed(2)}</TableCell>
                    <TableCell align="right" style={{ color: coin.price_change_percentage_24h >= 0 ? '#4caf50' : '#f44336' }}>
                      {coin.price_change_percentage_24h >= 0 ? '+' : ''}
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Pagination
            count={Math.ceil(filteredCoins.length / itemsPerPage)}
            page={page}
            onChange={handleChangePage}
            sx={{ mt: 2, justifyContent: 'center', display: 'flex' }}
          />
          
        </Paper>
      </Box>
    </React.Fragment>
  );
};

export default BuySell;
