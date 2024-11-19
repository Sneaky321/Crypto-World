import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: '#FFFFFF',
  padding: '30px 20px',
}));

const FooterSection = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 10px',
  alignItems: 'flex-start',
  '& h6': {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: '5px',
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#FFFFFF',
  textDecoration: 'none',
  fontSize: '0.7rem',
  margin: '2px 0',
  '&:hover': {
    color: '#d43f8d',
  },
}));

const footerSections = {
  PRODUCTS: [
    'Buy Bitcoin',
    'Bitcoin Trading',
    'Instant Buy/Sell',
    'Instant Swap',
    'CryptoHunter Markets',
    'CryptoHunter Bundles',
    'CryptoHunter Mastercard',
    'Buy NFTs',
    'Buy & Sell DeFi Projects',
    'Buy & Sell NFT Projects',
    'Multicoin Wallets',
    'Over the Counter (OTC)',
    'Self Managed Super (SMSF)',
    'API',
    'CryptoHunter App',
  ],
  ABOUT: [
    'Security',
    'Trade Safely With CryptoHunter',
    'Press Enquiries',
    'Fees',
    'Terms of Use',
    'Privacy Policy',
    'AML',
  ],
  EARN: ['Affiliate Program', 'Referral Program'],
  COMMUNITY: ['Facebook', 'Twitter', 'Instagram', 'Reddit'],
  LEARN: [
    'Learn with CryptoHunter',
    'Bitcoin Halving',
    'How to buy Bitcoin',
    'How to buy Ethereum',
    'Cryptocurrency & Tax',
  ],
};

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-around">
          {Object.entries(footerSections).map(([sectionTitle, items]) => (
            <FooterSection item xs={12} sm={2} key={sectionTitle}>
              <Typography variant="h6">{sectionTitle}</Typography>
              {items.map((item) => (
                <FooterLink key={item} to="#">
                  {item}
                </FooterLink>
              ))}
            </FooterSection>
          ))}
        </Grid>
        <Typography variant="body2" align="center" sx={{ marginTop: '15px', fontSize: '0.6rem', color: '#B0B0B0' }}>
          © {new Date().getFullYear()} CryptoHunter. All rights reserved.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;