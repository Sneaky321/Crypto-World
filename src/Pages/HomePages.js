import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/images/animation.json';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Rating,
  styled,
  Paper,
  Button,
} from '@mui/material';
import {
  Lock as LockIcon,
  People as PeopleIcon,
  VerifiedUser as VerifiedUserIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const HomePage = () => {
  const StyledFeatureCard = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
  }));

  const StyledIcon = styled(Box)(({ theme }) => ({
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& svg': {
      fontSize: 28,
color:'#B68DC2',
    },
  }));

  const StyledTestimonialCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    '& .MuiCardContent-root': {
      padding: theme.spacing(2),
      paddingBottom: `${theme.spacing(2)} !important`,
    },
  }));

  const RatingBadge = styled(Paper)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
    padding: theme.spacing(0.5, 1.5),
    borderRadius: 20,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
  }));

  const features = [
    {
      icon: <LockIcon />,
      title: 'Two-factor authentication',
      description: 'Enable 2FA for an extra layer of security to your CoinSpot account.',
    },
    {
      icon: <PeopleIcon />,
      title: 'Home for 2.5 million people',
      description: 'We have an active community of 2.5 million valued customers.',
    },
    {
      icon: <VerifiedUserIcon />,
      title: 'Blockchain Australia Certified',
      description: 'As a certified member of Blockchain Australia, you can be confident CoinSpot meets best practice standards.',
    },
  ];

  const testimonials = [
    {
      text: "5 star service, staff reply almost straight away for any inquiry or issue easy to use app and offer great safety for peace of mind.",
      author: "Patel",
      rating: 5,
      platform: "App Store",
    },
    {
      text: "If you want to learn any investment strategy it's always best to start small & with your own money...",
      author: "John",
      rating: 5,
      platform: "App Store",
    },
    {
      text: "This exchange is honestly the easiest most efficient to use...",
      author: "LoKi",
      rating: 5,
      platform: "Google Play",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ backgroundColor: 'transparent', padding: '40px 20px', color: 'white' }}
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
            <Button 
  variant="contained"
  sx={{
    background: 'linear-gradient(135deg, #e66465, #9198e5)',
    color: 'white',
    borderRadius: '30px',
    px: 4,  // Padding on the x-axis (left and right)
    py: 1.5, // Padding on the y-axis (top and bottom)
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',  // Subtle shadow for depth
    fontWeight: 'bold',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',

    '&:hover': {
      transform: 'scale(1.05)',  // Slightly enlarge on hover
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.25)', // Enhance shadow on hover
    },
  }} 
  href="/markets"
>
  Explore Markets
</Button>

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
                  transform: 'scale(1.05)', 
                },
              }}
            />
          </Grid>
        </Grid>
      </section>

      {/* Main Content with Background Color */}
      <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}> {/* Set desired color here */}
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', width: '100%', p: 3, alignItems: 'center' , backgroundColor:'#F5F8FF'}}>
          <Typography
      variant="h5"
      sx={{
        flexGrow: 1,
        fontSize: '72px',
        background: '-webkit-linear-gradient(#e66465, #9198e5);',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      Daily Crypto Activities
    </Typography>
            <Card sx={{ width: '40%', ml: 'auto' }}>
              <CardContent>
                <Timeline position="alternate">
                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: 'auto 0' }}
                      align="right"
                      variant="body2"
                      color="text.secondary"
                    >
                      9:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot sx={{ backgroundColor:'#B68DC2' }}>
                        <AccountBalanceWalletIcon sx={{ color:'white' }}/>
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <Typography variant="h6" component="span">
                        Check Wallet
                      </Typography>
                      <Typography>Review your crypto balance</Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: 'auto 0' }}
                      variant="body2"
                      color="text.secondary"
                    >
                      10:30 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot sx={{ color:'#9C27B0' }}>
                        <ShowChartIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <Typography variant="h6" component="span">
                        Analyze Market
                      </Typography>
                      <Typography>Check the latest trends and charts</Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: 'auto 0' }}
                      variant="body2"
                      color="text.secondary"
                    >
                      11:00 am
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot sx={{ backgroundColor:'#B68DC2' }}>
                        <ShoppingCartIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <Typography variant="h6" component="span">
                        Buy Crypto
                      </Typography>
                      <Typography>Invest in your chosen currency</Typography>
                    </TimelineContent>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelineOppositeContent
                      sx={{ m: 'auto 0' }}
                      variant="body2"
                      color="text.secondary"
                    >
                      3:00 pm
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot sx={{ backgroundColor:'#B68DC2' }} variant="outlined">
                        <MonetizationOnIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <Typography variant="h6" component="span">
                        Sell Crypto
                      </Typography>
                      <Typography>Capitalize on your gains</Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              The <Box component="span"  sx={{
        background: '-webkit-linear-gradient(#e66465, #9198e5);',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>trusted</Box> Australian platform
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Since 2013, we at CoinSpot have worked hard to maintain our trustworthy character...
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <StyledFeatureCard>
                  <StyledIcon 
      >{feature.icon}</StyledIcon>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </StyledFeatureCard>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h5" gutterBottom>
              Hear it from our <Box component="span"  sx={{
        background: '-webkit-linear-gradient(#e66465, #9198e5);',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>customers</Box>
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Here's what our customers have to say...
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 3 }}>
              <RatingBadge>
                <StarIcon sx={{ color: '#FFD700' }} />
                <Typography variant="body1">4.8</Typography>
              </RatingBadge>
              <RatingBadge>
                <StarIcon sx={{ color: '#FFD700' }} />
                <Typography variant="body1">4.7</Typography>
              </RatingBadge>
            </Box>
          </Box>

          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <StyledTestimonialCard>
                  <CardContent>
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                    <Typography variant="body2" sx={{ mb: 2, minHeight: 150 }}>
                      "{testimonial.text}"
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {testimonial.author}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonial.platform}
                    </Typography>
                  </CardContent>
                </StyledTestimonialCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
