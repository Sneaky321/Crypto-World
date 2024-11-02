import React from 'react';
import { Link } from 'react-router-dom';
import { useGetTrendingCoinsQuery, useGetCoinListQuery } from '../config/cryptoApiSlice';
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Pagination, Paper } from '@mui/material';
import AliceCarousel from 'react-alice-carousel';

const BuySell = () => {
  const { data: trendingData, isLoading: isTrendingLoading, error: trendingError } = useGetTrendingCoinsQuery('usd');
  const { data: coinList, isLoading: isCoinListLoading, error: coinListError } = useGetCoinListQuery('usd');

  const [page, setPage] = React.useState(1);
  const itemsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  if (isTrendingLoading || isCoinListLoading) {
    return <CircularProgress />;
  }

  if (trendingError || coinListError) {
    return <div>Error fetching data: {trendingError?.message || coinListError?.message}</div>;
  }

  const trendingItems = trendingData.map((coin) => (
    <div key={coin.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={coin.image} alt={coin.name} height="50" style={{ marginBottom: 5 }} />
      <span style={{ fontSize: '0.8rem' }}>
        {coin.symbol.toUpperCase()}
        &nbsp;
        <span style={{ color: coin.price_change_percentage_24h >= 0 ? 'rgb(14, 203, 129)' : 'red', fontWeight: 500 }}>
          {coin.price_change_percentage_24h >= 0 && '+'}{coin.price_change_percentage_24h?.toFixed(2)}%
        </span>
      </span>
      <span style={{ fontSize: '1rem', fontWeight: 500 }}>$ {coin.current_price.toFixed(2)}</span>
    </div>
  ));

  const displayCoins = coinList.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <section style={{ padding: '10px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '20px', padding:'5px' }}></h2>
      <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '20px' }}></h2>
      <div style={{ 
        height: '80px', 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '40px', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '8px', 
        padding: '10px',
        backgroundImage: 'url("")' // Use absolute path
      }}>
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          items={trendingItems}
          autoPlay
          responsive={{
            0: { items: 2 },
            512: { items: 4 }
          }}
        />
      </div>

      <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '20px' }}>Buy/Sell Coins</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <TableContainer component={Paper} style={{ marginTop: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Coin</TableCell>
                <TableCell align="right" style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Buy</TableCell>
                <TableCell align="right" style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Sell</TableCell>
                <TableCell align="right" style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Change (24hr)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayCoins.map((coin) => (
                <TableRow key={coin.id}>
                  <TableCell component="th" scope="row" style={{ fontSize: '0.8rem' }}>
                    <Link to={`/coins/${coin.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                      <img src={coin.image} alt={coin.name} style={{ height: 20, marginRight: 5 }} />
                      {coin.name}
                    </Link>
                  </TableCell>
                  <TableCell align="right" style={{ fontSize: '0.8rem' }}>${coin.current_price.toFixed(2)}</TableCell>
                  <TableCell align="right" style={{ fontSize: '0.8rem' }}>${coin.current_price.toFixed(2)}</TableCell>
                  <TableCell align="right" style={{ fontSize: '0.8rem' }}>
                    <span style={{ color: coin.price_change_percentage_24h > 0 ? 'green' : 'red' }}>
                      {coin.price_change_percentage_24h?.toFixed(2)}%
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Pagination
          count={Math.ceil(coinList.length / itemsPerPage)}
          page={page}
          onChange={handleChangePage}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
          size="small"
        />
      </div>
    </section>
  );
};

export default BuySell;
