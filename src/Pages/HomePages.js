// import React from 'react';
// import Layout from '../Components/Layout';
// import { Grid, Box, Typography } from '@mui/material';
// import { Player } from '@lottiefiles/react-lottie-player';
// import animationData from '../assets/images/animation.json'; // Adjust the path as needed

// const HomePage = () => {
//   return (
//     <Layout>
//       <section className="hero">
//         <Grid container alignItems="center">
//           <Grid item xs={10} sm={5}>
//             <Typography variant="h1">Welcome to Crypto Hunter</Typography>
//             <Typography variant="body1">
//               Your gateway to the world of cryptocurrency.
//             </Typography>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Player
//               autoplay
//               loop
//               src={animationData}
//               style={{ height: '300px', width: '300px' }} // Adjust size as needed
//             />
//           </Grid>
//         </Grid>
//       </section>
//     </Layout>
    
//   );
// };

// export default HomePage;
import React from 'react';
import Layout from '../Components/Layout';
import { Grid, Box, Typography } from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/images/animation.json'; // Adjust the path as needed

const HomePage = () => {
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
              Welcome to Crypto Hunter
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                fontSize: { xs: '1rem', sm: '1.25rem' },
                marginBottom: 2,
              }}
            >
              Your gateway to the world of cryptocurrency.
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

export default HomePage;
