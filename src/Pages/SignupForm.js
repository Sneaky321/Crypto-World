import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  Box,
  Container,
  Grid,
  Paper,
  Rating
} from '@mui/material';
import { EyeIcon, EyeOffIcon, Star } from 'lucide-react';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ py: 4, mt: 4, mb: 4 }}> {/* Added top and bottom margin */}
      <Grid container spacing={3}>
        {/* Left Section - Sign Up Form */}
        <Grid item xs={12} md={6}>
          <Card sx={{ maxHeight: '80vh', overflow: 'auto' }}>
            <CardContent sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>
                Create your account
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Join millions of users trading cryptocurrency on our platform.
              </Typography>

              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2, mb: 2 }}> {/* Added top and bottom gap */}
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Enter your email"
                />

                <TextField
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Enter your password"
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        size="small"
                      >
                        {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
                      </IconButton>
                    ),
                  }}
                />

                <TextField
                  label="Referral Code (Optional)"
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Enter referral code"
                />

                <Button
                  variant="contained"
                  size="medium"
                  fullWidth
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    py: 1,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%)',
                    },
                  }}
                >
                  Create Account
                </Button>

                <Typography variant="body2" align="center" color="text.secondary">
                  By creating an account you agree to our{' '}
                  <Button color="primary" sx={{ p: 0, minWidth: 'auto' }} variant="text">
                    Terms and conditions
                  </Button>
                </Typography>

                <Typography variant="body2" align="center" color="text.secondary">
                  Already have an account?{' '}
                  <Button color="primary" sx={{ p: 0, minWidth: 'auto' }} variant="text">
                    Sign in
                  </Button>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Section - Testimonials */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              p: 2,
              borderRadius: 2,
              maxHeight: '80vh',
              overflow: 'auto'
            }}
          >
            <Typography variant="h5" gutterBottom>
              What our users say
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              See what our community thinks about our platform
            </Typography>

            <Grid container spacing={1}>
              {/* Testimonial Cards */}
              {[
                {
                  text: "Excellent platform for cryptocurrency trading. User-friendly interface!",
                  author: "Alex M."
                },
                {
                  text: "Fast transactions and great customer support. Highly recommended!",
                  author: "Sarah K."
                }
              ].map((testimonial, index) => (
                <Grid item xs={12} key={index}>
                  <Paper
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      p: 1.5,
                      borderRadius: 1
                    }}
                  >
                    <Rating
                      value={5}
                      readOnly
                      size="small"
                      icon={<Star className="text-yellow-400" size={16} />}
                      emptyIcon={<Star className="text-yellow-400" size={16} />}
                    />
                    <Typography variant="body2" sx={{ my: 1 }}>{testimonial.text}</Typography>
                    <Typography variant="caption" sx={{ opacity: 0.75 }}>
                      - {testimonial.author}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            {/* Statistics */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
              {[
                { value: "1M+", label: "Active Users" },
                { value: "100+", label: "Cryptocurrencies" },
                { value: "0.1%", label: "Trading Fee" }
              ].map((stat, index) => (
                <Grid item xs={4} key={index}>
                  <Box textAlign="center">
                    <Typography variant="h6">{stat.value}</Typography>
                    <Typography variant="caption">{stat.label}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignupForm;
