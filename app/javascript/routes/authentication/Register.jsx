import React, { useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, CssBaseline,TextField, FormControlLabel,
    Checkbox, Link, Grid, Box, Typography, Paper, Container } from '@mui/material';
import {LockOutlined} from '@mui/icons-material';

import { register } from './../../services/userService';
import {getCurrentUser} from "./../../services/authService";

export default function Register() {
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
            await register(data);
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
                    Sign up
                </Typography>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                    sx={{ m: 1, width: '100%' }}
                >
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) =>
                            <TextField
                                autoComplete="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                                helperText={errors.name}
                                {...field}
                            />}
                    />
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) =>
                            <TextField
                                variant="outlined"
                                required
                                margin="normal"
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
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
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I want to receive promotions via email."
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <Link href="/Login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
}