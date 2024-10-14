import { Box, Typography, Link, Grid } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1A1A1A',
  color: '#B0B0B0',
  padding: '30px 20px', // Reduced padding
}));

const FooterSection = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 10px', // Reduced margin
  alignItems: 'flex-start',
  '& h6': {
    fontSize: '0.8rem', // Smaller header font size
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: '5px', // Reduced margin
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: '#B0B0B0',
  textDecoration: 'none',
  fontSize: '0.7rem', // Smaller link font size
  margin: '2px 0', // Reduced margin
  '&:hover': {
    color: '#1DB954',
  },
}));

const Footer = () => {
  const footerSections = {
    PRODUCTS: [
      'Buy Bitcoin',
      'Bitcoin Trading',
      'Instant Buy/Sell',
      'Instant Swap',
      'CoinSpot Markets',
      'CoinSpot Bundles',
      'CoinSpot Mastercard',
      'Buy NFTs',
      'Buy & Sell DeFi Projects',
      'Buy & Sell NFT Projects',
      'Multicoin Wallets',
      'Over the Counter (OTC)',
      'Self Managed Super (SMSF)',
      'API',
      'CoinSpot App',
    ],
    ABOUT: [
      'Security',
      'Trade Safely With CoinSpot',
      'Press Enquiries',
      'Fees',
      'Terms of Use',
      'Privacy Policy',
      'AML',
    ],
    EARN: ['Affiliate Program', 'Referral Program'],
    COMMUNITY: ['Facebook', 'Twitter', 'Instagram', 'Reddit'],
    LEARN: [
      'Learn with CoinSpot',
      'Bitcoin Halving',
      'How to buy Bitcoin',
      'How to buy Ethereum',
      'Cryptocurrency & Tax',
    ],
   
  };

  return (
    <FooterContainer>
      <Grid container justifyContent="space-around">
        {Object.entries(footerSections).map(([sectionTitle, items]) => (
          <FooterSection item xs={12} sm={2} key={sectionTitle}>
            <Typography variant="h6">{sectionTitle}</Typography>
            {items.map((item) => (
              <FooterLink key={item} href="#">
                {item}
              </FooterLink>
            ))}
          </FooterSection>
        ))}
      </Grid>
      <Typography variant="body2" align="center" sx={{ marginTop: '15px', fontSize: '0.6rem', color: '#B0B0B0' }}>
        © {new Date().getFullYear()} CoinSpot. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
