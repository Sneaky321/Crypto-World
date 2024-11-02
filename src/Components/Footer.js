import { Box, Typography, Link, Grid } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#B68DC2',
  color: 'FFFFFF',
  padding: '30px 20px', // Reduced padding
}));
console.log('Footer rendered');
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
  color: '#FFFFFF',
  textDecoration: 'none',
  fontSize: '0.7rem', // Smaller link font size
  margin: '2px 0', // Reduced margin
  '&:hover': {
    color: '#d43f8d',
  },
}));

const Footer = () => {
  const footerSections = {
    PRODUCTS: [
      'Buy Bitcoin',
      'Bitcoin Trading',
      'Instant Buy/Sell',
      'Instant Swap',
      'CryptoHuntert Markets',
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
        © {new Date().getFullYear()} CryptoHunter. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
