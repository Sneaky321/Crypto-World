import { useGetTrendingCoinsQuery, useGetCoinListQuery } from '../config/cryptoApiSlice';
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination, Typography, Grid } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';
import { useEffect, useState } from 'react';

const BuySell = () => {
  const { data: trendingData, error: trendingError, isLoading: isTrendingLoading } = useGetTrendingCoinsQuery('usd');
  const { data: coinList, error: coinListError, isLoading: isCoinListLoading } = useGetCoinListQuery('usd');
  
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  if (isTrendingLoading || isCoinListLoading) {
    return <CircularProgress />;
  }

  if (trendingError || coinListError) {
    return <div>Error fetching data: {trendingError?.message || coinListError?.message}</div>;
  }

  const items = trendingData.map((coin) => {
    const profit = coin?.price_change_percentage_24h >= 0;

    return (
      <div key={coin.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={coin?.image} alt={coin.name} height="80" style={{ marginBottom: 10, borderRadius: '50%' }} />
        <Typography variant="h6">
          {coin?.symbol.toUpperCase()}
          <span style={{ color: profit ? 'green' : 'red', marginLeft: 5 }}>
            {profit && '+'}{coin?.price_change_percentage_24h?.toFixed(2)}%
          </span>
        </Typography>
        <Typography variant="h5" style={{ fontWeight: 'bold' }}>
          ${coin?.current_price.toFixed(2)}
        </Typography>
      </div>
    );
  });

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = coinList?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      <Typography variant="h4" align="center" gutterBottom style={{ marginBottom: '20px', color: '#343a40' }}>
        Trending Coins
      </Typography>
      <div style={{ height: '300px', display: 'flex', alignItems: 'center' }}>
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          items={items}
          autoPlay
        />
      </div>

      <Typography variant="h4" align="center" gutterBottom style={{ marginTop: '40px', color: '#343a40' }}>
        Coin List
      </Typography>
      <TableContainer component={Paper} style={{ marginTop: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#e0e0e0' }}>
              <TableCell style={{ fontWeight: 'bold', color: '#495057' }}>COIN</TableCell>
              <TableCell align="right" style={{ fontWeight: 'bold', color: '#495057' }}>BUY</TableCell>
              <TableCell align="right" style={{ fontWeight: 'bold', color: '#495057' }}>SELL</TableCell>
              <TableCell align="right" style={{ fontWeight: 'bold', color: '#495057' }}>CHANGE (24hr)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems?.map((coin) => (
              <TableRow key={coin.id} style={{ '&:hover': { backgroundColor: '#f1f1f1' } }}>
                <TableCell component="th" scope="row" style={{ display: 'flex', alignItems: 'center', color: 'black' }}>
                  <img src={coin.image} alt={coin.name} height="20" style={{ marginRight: 10 }} />
                  {coin.name}
                </TableCell>
                <TableCell align="right" style={{ color: 'black' }}>
                  <Typography variant="body2">${coin.current_price.toFixed(2)}</Typography>
                </TableCell>
                <TableCell align="right" style={{ color: 'black' }}>
                  <Typography variant="body2">${coin.current_price.toFixed(2)}</Typography>
                </TableCell>
                <TableCell align="right" style={{ color: coin.price_change_percentage_24h >= 0 ? 'green' : 'red' }}>
                  {coin.price_change_percentage_24h?.toFixed(2)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        count={Math.ceil(coinList?.length / itemsPerPage)}
        style={{
          padding: 20,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        onChange={(_, value) => {
          setPage(value);
          window.scroll(0, 450);
        }}
      />

      {/* FAQ Section */}
      // Inside your BuySell component
<Grid container spacing={2} style={{ marginTop: '40px', alignItems: 'center', padding: '20px', backgroundColor: '#f1f1f1', borderRadius: '8px' }}>
  <Grid item xs={12} md={6}>
    <Typography variant="h5" gutterBottom style={{ color: '#495057', fontWeight: 'bold' }}>
      Frequently Asked Questions
    </Typography>
    <Typography variant="body1" style={{ marginBottom: '10px', color: '#343a40' }}>
      How many coins are available on CoinSpot?
    </Typography>
    <Typography variant="body1" style={{ marginBottom: '10px', color: '#343a40' }}>
      How do I deposit funds?
    </Typography>
    <Typography variant="body1" style={{ marginBottom: '10px', color: '#343a40' }}>
      How do I see the coins I purchased?
    </Typography>
  </Grid>
  <Grid item xs={12} md={6}>
    <img 
      src="your-image-url-here" 
      alt="FAQ Illustration" 
      style={{ height: '200px', width: 'auto', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)', float: 'right' }} 
    />
  </Grid>
</Grid>

    </section>
  );
};

export default BuySell;
