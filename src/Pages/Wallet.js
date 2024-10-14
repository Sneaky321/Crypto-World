
import React from 'react';
import Layout from '../Components/Layout';
import { Grid, Box, Typography } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/images/animation.json'; // Adjust the path as needed

const Wallet = () => {
  return (
    <Layout>
      <section 
        className="hero" 
        style={{ backgroundColor: 'transparent', padding: '40px 20px', color: 'white' }} // Hero background
      >
        <Grid container alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontWeight: 'bold',
                fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                lineHeight: 1.2,
              }}
            >
              Simple & Secure Cryptocurrency Wallet
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', sm: '1.25rem' },
                marginBottom: 2,
              }}
            >
              Keep track of your individual wallet balances, buy, sell and swap into any other coin or token on the platform.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box 
              component={Player}
              autoplay
              loop
              src={animationData}
              sx={{ 
                height: '300px', 
                width: '300px', 
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)', // 3D hover effect
                },
              }}
            />
          </Grid>
        </Grid>
      </section>
    </Layout>
  );
};

export default Wallet;
