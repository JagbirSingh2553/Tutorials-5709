import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import makeStyles from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
    },
    textField: {
        margin: theme.spacing(3),
        width: '100%',
    },
    button: {
        margin: theme.spacing(2, 0),
        width: '100%',
    },
    link: {
        textAlign: 'center',
    },
}));

const RegistrationPage = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            // Form is valid, navigate to profile page
            navigate('/profile');
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = () => {
        const validationErrors = {};

        if (!firstName.match(/^[A-Za-z]+$/)) {
            validationErrors.firstName = 'First name should contain only letters';
        }

        if (!lastName.match(/^[A-Za-z]+$/)) {
            validationErrors.lastName = 'Last name should contain only letters';
        }

        if (!email.match(/^\S+@\S+\.\S+$/)) {
            validationErrors.email = 'Invalid email address';
        }

        if (password.length < 8) {
            validationErrors.password = 'Password should be at least 8 characters long';
        }

        if (password !== confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match';
        }

        return validationErrors;
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Registration Form
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                error={!!errors.firstName}
                                helperText={errors.firstName}
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            label="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            error={!!errors.lastName}
                            helperText={errors.lastName}
                            variant="outlined"
                            required
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                        style={{width:"400px"}}
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={!!errors.email}
                            helperText={errors.email}
                            variant="outlined"
                            required
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            style={{width:"400px"}}
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!errors.password}
                            helperText={errors.password}
                            variant="outlined"
                            required
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            style={{width:"400px"}}
                            label="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                            variant="outlined"
                            required
                        />
                        </Grid>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disableElevation
                            fullWidth
                            sx={{ mt: 2, mb: 2 }}
                            style={{marginLeft:"20px"}}
                        >
                            Sign Up
                        </Button>
                        <Typography variant="body2" style={{marginLeft:"100px"}}
                        >
                            Already have an account? <Link href="#">Log In</Link>
                        </Typography>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default RegistrationPage;
