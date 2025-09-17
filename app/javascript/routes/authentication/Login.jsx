import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { LockOutlined } from '@mui/icons-material';
import { Paper, Link, Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container } from '@mui/material';
import { login, getCurrentUser } from './../../services/authService';

export default function Login() {

    const navigate = useNavigate();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({ defaultValues: { email: '', password: '' } });

    useEffect(() => {
        if (getCurrentUser()) {
            navigate('/');
        }
    }, [navigate]);

    const onSubmit = async (data) => {
        const { email, password } = data;
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Paper
                elevation={3}
                sx={{
                    mt: 8,
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ m: 1, width: '100%' }}
                >
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) =>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                autoComplete="email"
                                autoFocus
                                helperText={errors.email}
                                {...field}
                            />}
                    />
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field }) =>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                helperText={errors.password}
                                {...field}
                            />}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/Register" variant="body2">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>

                </Box>
            </Paper>
        </Container>
    );
}