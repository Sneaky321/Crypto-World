'use client'

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  IconButton,
  Tooltip,
  useTheme,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { styled } from '@mui/system';
import { Player } from '@lottiefiles/react-lottie-player';
import {
  AccountBalanceWallet,
  Savings,
  Security,
  Support,
  Send,
  CallReceived,
  LocationOn,
  Info,
  ArrowForward,
} from '@mui/icons-material';
import Animewallet from '../assets/images/Animewallet.json';

const GradientBackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  borderRadius: '0 0 20% 20% / 10%',
  padding: theme.spacing(8, 0),
  marginBottom: theme.spacing(6),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

const FeatureIcon = styled(Avatar)(({ theme }) => ({
  backgroundColor: '#667eea',
  color: '#ffffff',
  width: theme.spacing(6),
  height: theme.spacing(6),
}));

const CryptoCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#7e96ee',
  color: '#ffffff',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
  },
}));

export default function Wallet() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { icon: <Savings />, title: 'Multiple Deposit Options', description: 'PayID, Direct Deposit, and more' },
    { icon: <Security />, title: 'Enhanced Security', description: 'Two-Factor Authentication & more' },
    { icon: <Support />, title: '24/7 Support', description: 'Always here to help you' },
  ];

  const cryptoData = [
    { name: 'Bitcoin', symbol: 'BTC', balance: 2.5, value: 75000 },
    { name: 'Ethereum', symbol: 'ETH', balance: 10, value: 25000 },
    { name: 'Litecoin', symbol: 'LTC', balance: 50, value: 5000 },
    { name: 'Ripple', symbol: 'XRP', balance: 1000, value: 1000 },
  ];

  const faqItems = [
    { icon: <Send />, question: 'How do I Send cryptocurrency?' },
    { icon: <CallReceived />, question: 'How do I Receive cryptocurrency?' },
    { icon: <LocationOn />, question: 'How do I locate my wallet address?' },
  ];

  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#667eea',
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ bgcolor: 'background.default' }}>
        <GradientBackground>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h2" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                  Your Secure Crypto Wallet
                </Typography>
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 400 }}>
                  Manage, trade, and grow your crypto assets with ease
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: '#667eea',
                    '&:hover': { bgcolor: 'grey.100' },
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                  }}
                >
                  Get Started
                </Button>
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  component={Player}
                  autoplay
                  loop
                  src={Animewallet}
                  sx={{
                    width: { xs: '100%', sm: '80%', md: '100%' },
                    maxWidth: '400px',
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </GradientBackground>

        <Container maxWidth="lg" sx={{ mb: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: '#667eea' }}>
                Key Features
              </Typography>
              <List>
                {features.map((feature, index) => (
                  <ListItem
                    key={index}
                    sx={{
                      py: 2,
                      bgcolor: activeFeature === index ? '#667eea' : 'transparent',
                      borderRadius: 2,
                      transition: 'background-color 0.3s ease-in-out',
                    }}
                    onMouseEnter={() => setActiveFeature(index)}
                    onMouseLeave={() => setActiveFeature(-1)}
                  >
                    <ListItemIcon>
                      <FeatureIcon>{feature.icon}</FeatureIcon>
                    </ListItemIcon>
                    <ListItemText
                      primary={feature.title}
                      secondary={feature.description}
                      primaryTypographyProps={{ fontWeight: 600 }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, color: '#667eea' }}>
                Your Wallet Overview
              </Typography>
              <Grid container spacing={2}>
                {cryptoData.map((crypto, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <CryptoCard>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                          <Typography variant="h6">{crypto.name}</Typography>
                          <Avatar sx={{ bgcolor: 'white', color: '#667eea' }}>
                            {crypto.symbol[0]}
                          </Avatar>
                        </Box>
                        <Typography variant="body1">Balance: {crypto.balance} {crypto.symbol}</Typography>
                        <Typography variant="body2">Value: ${crypto.value.toLocaleString()}</Typography>
                      </CardContent>
                    </CryptoCard>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}>
              Frequently Asked Questions
            </Typography>
            <Grid container spacing={3}>
              {faqItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <StyledCard>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ bgcolor: '#667eea', mr: 2 }}>{item.icon}</Avatar>
                        <Typography variant="h6">{item.question}</Typography>
                      </Box>
                      <Button variant="outlined" color="primary" fullWidth endIcon={<ArrowForward />}>
                        Learn More
                      </Button>
                    </CardContent>
                  </StyledCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box sx={{ bgcolor: '#667eea', color: '#ffffff', py: 8 }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                  Ready to Start Your Crypto Journey?
                </Typography>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Sign up now and get a 10% bonus on your first deposit!
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: '#667eea',
                    '&:hover': { bgcolor: 'grey.100' },
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                  }}
                >
                  Create Account
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}