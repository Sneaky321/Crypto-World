import React from 'react';
import {
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Paper,
  styled
} from '@mui/material';
import { Player } from '@lottiefiles/react-lottie-player';
import {
  AttachMoney,
  CheckCircle,
  AccountBalance,
  ChevronRight,
  MoreVert,
  CreditCard,
  HelpOutline,
} from '@mui/icons-material';
import Animewallet from '../assets/images/Animewallet.json';

const BlueCard = styled(Paper)(({ theme }) => ({
  backgroundColor: '#B68DC2',
  color: 'white',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

const StyledFaqButton = styled(Button)(({ theme }) => ({
  justifyContent: 'space-between',
  width: '100%',
  textAlign: 'left',
  padding: theme.spacing(1.5),
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
  },
  marginBottom: theme.spacing(1),
}));

const Wallet = () => {
  return (
    <Box>
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
                fontSize: { xs: '1rem', sm: '1rem', md: '3rem' },
                lineHeight: 1.2,
              }}
            >
              Simple & Secure Cryptocurrency Wallet
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ fontSize: { xs: '1rem', sm: '1rem' }, marginBottom: 2 }}
            >
              Keep track of your individual wallet balances, buy, sell, and swap into any other coin or token on the platform.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box 
              component={Player}
              autoplay
              loop
              src={Animewallet}
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

      {/* Trusted Platform Section with Background Color */}
      <section style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
          Trusted by Thousands
        </Typography>
        <Typography variant="body1" align="center" sx={{ marginBottom: 2 }}>
          Join the community of users who trust us to keep their assets safe.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <BlueCard>
              <CardContent>
                <Typography variant="h6">User Satisfaction</Typography>
                <Typography variant="body2">99.9% of our users are satisfied with our services.</Typography>
              </CardContent>
            </BlueCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <BlueCard>
              <CardContent>
                <Typography variant="h6">Security Measures</Typography>
                <Typography variant="body2">We employ the highest security measures to protect your assets.</Typography>
              </CardContent>
            </BlueCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <BlueCard>
              <CardContent>
                <Typography variant="h6">24/7 Support</Typography>
                <Typography variant="body2">Our support team is available 24/7 to assist you.</Typography>
              </CardContent>
            </BlueCard>
          </Grid>
        </Grid>
      </section>

      {/* Crypto Dashboard Section with Light Background */}
      <section style={{ width: '100vw', padding: 0, backgroundColor: '#f5f5f5' }}>
        <Box 
          sx={{ 
            width: '100%',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          {/* Deposit Options Section */}
          <Card sx={{ overflow: 'visible', width: '100%' }}>
            <CardHeader
              sx={{ pb: 1 }}
              avatar={<AttachMoney color="#B68DC2" sx={{ fontSize: 30 }} />}
              title={
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Multiple AUD <Box component="span" sx={{ color: '#B68DC2.main' }}>deposit</Box> options
                </Typography>
              }
            />
            <CardContent>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Easily deposit in AUD with multiple free and instant deposit options such as PayID & Direct Deposit.
              </Typography>
              <List sx={{ p: 0 }}>
                {/* List Items */}
                <StyledListItem button>
                  <ListItemIcon><CreditCard sx={{ color: '#FF5733' }} /></ListItemIcon>
                  <ListItemText primary="PayID" sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }} />
                </StyledListItem>
                <StyledListItem button>
                  <ListItemIcon><AccountBalance color="primary" /></ListItemIcon>
                  <ListItemText primary="Direct Deposit" sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }} />
                </StyledListItem>
                <StyledListItem button>
                  <ListItemIcon><AttachMoney color="#B68DC2" /></ListItemIcon>
                  <ListItemText primary="Cash Deposit" sx={{ '& .MuiListItemText-primary': { fontWeight: 500 } }} />
                </StyledListItem>
              </List>
            </CardContent>
          </Card>

          {/* Security Section */}
          <Card sx={{ width: '100%' }}>
            <CardHeader
              sx={{ pb: 1 }}
              avatar={<CheckCircle color="primary" sx={{ fontSize: 30 }} />}
              title={
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  An <Box component="span" sx={{ color: 'primary.main' }}>extra level</Box> of security for your account
                </Typography>
              }
            />
            <CardContent>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Additional security facilities such as Two-Factor Authentication and account-wide withdrawal bans provide greater protection for your assets.
              </Typography>
              <BlueCard elevation={0}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="subtitle1">Authenticator</Typography>
                  <IconButton 
                    size="small" 
                    sx={{ color: 'white', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  }>
                    <MoreVert />
                  </IconButton>
                </Box>
                <Typography variant="h4" sx={{ mb: 1, fontWeight: 500 }}>435 897</Typography>
                <Typography variant="caption">CoinSpot</Typography>
              </BlueCard>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card sx={{ width: '100%' }}>
            <CardHeader
              sx={{ pb: 1 }}
              title={<Typography variant="h6" sx={{ fontWeight: 500 }}>Frequently asked questions</Typography>}
            />
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {["How do I Send cryptocurrency?", "How do I Receive cryptocurrency?", "How do I locate my wallet address?"].map((question, index) => (
                  <StyledFaqButton key={index} variant="text" endIcon={<ChevronRight />}>
                    <Typography variant="body1" color="text.primary" sx={{ flex: 1, textAlign: 'left' }}>{question}</Typography>
                  </StyledFaqButton>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Additional Information Section with Dark Background */}
        <Box sx={{ padding: '60px 20px', backgroundColor: '#CFD4D8', width: '100%' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" align="center" sx={{ color: 'white', fontWeight: 600 }}>
                Sign up and get a bonus of 10% on your first deposit!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" sx={{ borderRadius: 20 }}>
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Box>
      </section>
    </Box>
  );
};

export default Wallet;
