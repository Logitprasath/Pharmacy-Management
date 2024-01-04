// Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2c3e50', // Change the background color as needed
        color: '#fff', // Text color
        textAlign: 'center',
        padding: '10px',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body2">
        &copy; 2023  Pharmacy. All Rights Reserved
      </Typography>
      <section>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body2">
          Have questions or need assistance? Contact us today!
        </Typography>
        <Typography variant="body2">
          Email: <a href="mailto:727822tucy028@skct.edu.in">727822tucy028@skct.edu.in</a>
        </Typography>
        <Typography variant="body2">Phone: 1234567890</Typography>
      </section>
    </Box>
  );
};

export default Footer;
