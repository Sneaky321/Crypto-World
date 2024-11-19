import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/images/animation.json';
import { Link } from 'react-router-dom';
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
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  Chip,
  Avatar,
} from '@mui/material';
import {
  Lock as LockIcon,
  People as PeopleIcon,
  VerifiedUser as VerifiedUserIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  AccountBalanceWallet as AccountBalanceWalletIcon,
  ShowChart as ShowChartIcon,
  ShoppingCart as ShoppingCartIcon,
  MonetizationOn as MonetizationOnIcon,
  ArrowRight,
  RocketLaunch,
} from '@mui/icons-material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';


const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTab, setActiveTab] = useState(0);

  const StyledFeatureCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: theme.shadows[4],
    },
  }));

  const StyledIcon = styled(Box)(({ theme }) => ({
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.light,
    marginBottom: theme.spacing(2),
    '& svg': {
      fontSize: 32,
      color: theme.palette.primary.main,
    },
  }));

  const StyledTestimonialCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
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
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "If you want to learn any investment strategy it's always best to start small & with your own money...",
      author: "John",
      rating: 5,
      platform: "App Store",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      text: "This exchange is honestly the easiest most efficient to use...",
      author: "LoKi",
      rating: 5,
      platform: "Google Play",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ];

  const cryptoActivities = [
    { time: '9:00 am', title: 'Check Wallet', description: 'Review your crypto balance', icon: <AccountBalanceWalletIcon /> },
    { time: '10:30 am', title: 'Analyze Market', description: 'Check the latest trends and charts', icon: <ShowChartIcon /> },
    { time: '11:00 am', title: 'Buy Crypto', description: 'Invest in your chosen currency', icon: <ShoppingCartIcon /> },
    { time: '3:00 pm', title: 'Sell Crypto', description: 'Capitalize on your gains', icon: <MonetizationOnIcon /> },
  ];

  const GradientText = styled(Typography)(({ theme }) => ({
    background: '-webkit-linear-gradient(45deg, #0250c5 30%, #d43f8d 90%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
  }));
  
  const StyledButton = styled(Button)(({ theme, variant }) => ({
    borderRadius: '50px',
    padding: '12px 24px',
    textTransform: 'none',
    fontWeight: 600,
    ...(variant === 'contained' ? {
      background: 'linear-gradient(45deg, #0250c5 30%, #d43f8d 90%)',
      color: 'white',
      border: 'none',
      '&:hover': {
        background: 'linear-gradient(45deg, #0250c5 40%, #d43f8d 100%)',
      },
    } : {
      border: '2px solid #0250c5',
      color: '#0250c5',
      '&:hover': {
        border: '2px solid #d43f8d',
        color: '#d43f8d',
      },
    }),
  }));
  
  const PhoneMockup = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '380px',
    height: '500px',
    background: '#001B44',
    borderRadius: '40px',
    padding: '20px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    color: 'white',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '150px',
      height: '25px',
      background: '#001B44',
      borderBottomLeftRadius: '20px',
      borderBottomRightRadius: '20px',
    },
  }));
  
  const CryptoRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  }));
  
  return (
    <>
      {/* Hero Section */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: { xs: '40px 20px', md: '80px 20px' },
        borderRadius: '0 0 50% 50% / 4%',
      }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                  lineHeight: 1.2,
                  marginBottom: 2,
                }}
              >
                Welcome to Crypto Hunter
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontSize: { xs: '1.1rem', sm: '1.3rem' },
                  marginBottom: 4,
                  opacity: 0.8,
                }}
              >
                Your gateway to the world of cryptocurrency.
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
               <RocketLaunch/> Explore Markets
              </Button>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box 
                component={Player}
                autoplay
                loop
                src={animationData}
                sx={{ 
                  height: { xs: '250px', md: '400px' }, 
                  width: { xs: '250px', md: '400px' }, 
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)', 
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
     < Box sx={{ py: 10, overflow: 'hidden', background: 'white' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="overline" 
              sx={{ 
                color: '#0250c5',
                fontWeight: 'bold',
                letterSpacing: 2,
                mb: 2,
                display: 'block'
              }}
            >
              CryptoHunter.COM ONCHAIN
            </Typography>
            <GradientText variant="h2" sx={{ mb: 4 }}>
               DeFi Made Simple 
            </GradientText>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                <Box component="span" sx={{ color: '#0250c5', fontWeight: 'bold' }}>
                  CryptoHunter.com Onchain.
                </Box>
                {' '}
                <Box component="span" sx={{ color: 'text.secondary' }}>
                  Your Keys, Your Crypto
                </Box>
              </Typography>
              <Typography variant="h5" sx={{ mb: 2 }}>
                <Box component="span" sx={{ color: '#0250c5', fontWeight: 'bold' }}>
                  Earn.
                </Box>
                {' '}
                <Box component="span" sx={{ color: 'text.secondary' }}>
                  No lock-up period and stable returns.
                </Box>
              </Typography>
              <Typography variant="h5" sx={{ mb: 4 }}>
                <Box component="span" sx={{ color: '#0250c5', fontWeight: 'bold' }}>
                  Swap.
                </Box>
                {' '}
                <Box component="span" sx={{ color: 'text.secondary' }}>
                  Swap DeFi coins and earn Triple Yield.
                </Box>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <StyledButton variant="outlined">
                Get Crypto.com Onchain
              </StyledButton>
              <StyledButton variant="contained" endIcon={<ArrowRight />}>
                Explore Features
              </StyledButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <PhoneMockup>
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" sx={{ mb: 1, opacity: 0.7 }}>
                  TOTAL BALANCE
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  $88,025 USD
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                {['Send', 'Receive', 'Buy'].map((action) => (
                  <Box
                    key={action}
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      backgroundColor: '#0250c5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      fontSize: '12px',
                    }}
                  >
                    {action}
                  </Box>
                ))}
              </Box>
              {[
                { name: 'Bitcoin', symbol: 'BTC', amount: '1 BTC', value: '$22,886.68', change: '-0.21%' },
                { name: 'Ethereum', symbol: 'ETH', amount: '5 ETH', value: '$9,165.05', change: '+4.23%' },
                { name: 'Cronos', symbol: 'CRO', amount: '20,000 CRO', value: '$1,609.8', change: '+1.23%' },
                { name: 'Polkadot', symbol: 'DOT', amount: '500 DOT', value: '$3,345', change: '-0.21%' },
              ].map((crypto) => (
                <CryptoRow key={crypto.symbol}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle2">{crypto.name}</Typography>
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: crypto.change.startsWith('+') ? '#4CAF50' : '#f44336'
                        }}
                      >
                        {crypto.change}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="subtitle2">{crypto.amount}</Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      {crypto.value}
                    </Typography>
                  </Box>
                </CryptoRow>
              ))}
            </PhoneMockup>
          </Grid>
        </Grid>
      </Container>
    </Box>
      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        {/* Daily Crypto Activities */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Daily Crypto Activities
          </Typography>
          <Card elevation={3}>
            <CardContent>
              <Timeline position={isMobile ? "right" : "alternate"}>
                {cryptoActivities.map((activity, index) => (
                  <TimelineItem key={index}>
                    {!isMobile && (
                      <TimelineOppositeContent sx={{ m: 'auto 0' }} color="text.secondary">
                        {activity.time}
                      </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                      <TimelineConnector />
                      <TimelineDot color="primary" variant="outlined">
                        {activity.icon}
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                      <Typography variant="h6" component="span">
                        {activity.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {activity.description}
                      </Typography>
                      {isMobile && (
                        <Typography variant="caption" color="text.secondary">
                          {activity.time}
                        </Typography>
                      )}
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </CardContent>
          </Card>
        </Box>

        {/* Features Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          <span>
  Why Choose{' '}
  <span
    style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    Crypto Hunter
  </span>
</span>

          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <StyledFeatureCard>
                  <StyledIcon>{feature.icon}</StyledIcon>
                  <Typography variant="h6" gutterBottom align="center">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center">
                    {feature.description}
                  </Typography>
                </StyledFeatureCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          <span>
  What Our{' '}
  <span
    style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    Customers
  </span>{' '}
  Say
</span>

          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
            <RatingBadge>
              <StarIcon sx={{ color: '#FFD700' }} />
              <Typography variant="body1">4.8 App Store</Typography>
            </RatingBadge>
            <RatingBadge>
              <StarIcon sx={{ color: '#FFD700' }} />
              <Typography variant="body1">4.7 Google Play</Typography>
            </RatingBadge>
          </Box>
          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <StyledTestimonialCard>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar src={testimonial.avatar} sx={{ mr: 2 }} />
                      <Box>
                        <Typography variant="subtitle1">{testimonial.author}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {testimonial.platform}
                        </Typography>
                      </Box>
                    </Box>
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                    <Typography variant="body2" sx={{ mb: 2, minHeight: 100 }}>
                      "{testimonial.text}"
                    </Typography>
                  </CardContent>
                </StyledTestimonialCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Market Trends Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          <span>
  Market{' '}
  <span
    style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}
  >
    Trends
  </span>
</span>

          </Typography>
          <Tabs
            value={activeTab}
            onChange={(event, newValue) => setActiveTab(newValue)}
            centered
            sx={{ mb: 3 }}
          >
            <Tab label="Top Gainers" />
            <Tab label="Top Losers" />
            <Tab label="Most Active" />
          </Tabs>
          <Grid container spacing={2}>
            {[...Array(5)].map((_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Typography variant="h6">BTC</Typography>
                      <Chip 
                        icon={<TrendingUpIcon />} 
                        label="+5.67%" 
                        color="success" 
                        size="small"
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary">Bitcoin</Typography>
                    <Typography variant="h6" sx={{ mt: 1 }}>$34,567.89</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
        </Box>
      </Container>
    </>
  );
};

export default HomePage;