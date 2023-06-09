import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const ProfilePage = () => {
  // Dummy data for profile details
  const firstName = 'John';
  const lastName = 'Doe';
  const email = 'johndoe@example.com';

  return (
    <div>
        <Box sx={{ mt: 3 }}>
      <Typography variant="h4">Profile</Typography>
      <Typography variant="body1">
        First Name: {firstName}
      </Typography>
      <Typography variant="body1">
        Last Name: {lastName}
      </Typography>
      <Typography variant="body1">
        Email: {email}
      </Typography>
      </Box>
    </div>
  );
};

export default ProfilePage;
