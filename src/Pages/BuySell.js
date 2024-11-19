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

  const handleCarouselMove = (direction) => {
    if (direction === 'next') {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % trendingData.length);
    } else {
      setCarouselIndex((prevIndex) => (prevIndex - 1 + trendingData.length) % trendingData.length);
    }
  };

  return (
    <Box sx={{ maxWidth: 1200, margin: '0 auto', padding: 3, background: 'whitesmoke' }}>
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
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Search coins..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: <Search color="action" />,
              }}
            />
          </Grid>
        </Grid>
        <TableContainer component={Paper} elevation={0}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: '#667eea' }}>Coin</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', color: '#667eea' }}>Price</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', color: '#667eea' }}>24h Change</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', color: '#667eea' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayCoins.map((coin) => (
                <TableRow key={coin.id} hover>
                  <TableCell component="th" scope="row">
                    <Link to={`/coins/${coin.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                      <img src={coin.image} alt={coin.name} style={{ height: 20, marginRight: 8 }} />
                      <Typography variant="body2">{coin.name}</Typography>
                      <Typography variant="caption" color="textSecondary" sx={{ ml: 1 }}>
                        ({coin.symbol.toUpperCase()})
                      </Typography>
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="body2">${coin.current_price.toFixed(2)}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="body2"
                      color={coin.price_change_percentage_24h > 0 ? 'success.main' : 'error.main'}
                      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
                    >
                      {coin.price_change_percentage_24h > 0 ? <TrendingUp fontSize="small" /> : <TrendingDown fontSize="small" />}
                      {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="contained" size="small" sx={{ mr: 1, bgcolor: '#667eea', '&:hover': { bgcolor: '#764ba2' } }}>
                      Buy
                    </Button>
                    <Button variant="outlined" size="small" sx={{ color: '#667eea', borderColor: '#667eea', '&:hover': { borderColor: '#764ba2', color: '#764ba2' } }}>
                      Sell
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Pagination
            count={Math.ceil(filteredCoins.length / itemsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
            size="small"
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default BuySell;