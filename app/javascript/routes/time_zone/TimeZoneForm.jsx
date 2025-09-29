import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import {
    Button, CssBaseline, TextField,
    Grid, Box, Typography, Container, Paper, Toolbar
} from '@mui/material';

import { addUserTimeZone } from '@/services/timeZoneService';

export default function TimeZoneForm() {
    // Get ID from URL
    let { user_id } = useParams();
    const navigate = useNavigate();


    const { handleSubmit,
        control,
        formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {
        addUserTimeZone(user_id, data);
        navigate(`/profile/${user_id}`);
    });

    return (
        <Container component="main" maxWidth="xs">
            <Toolbar />
            <CssBaseline />
            <Paper
                elevation={3}
                sx={{
                    mt: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Typography component="h1" variant="h5">
                    Add Time Zone
                </Typography>
                <Box
                    component="form"
                    noValidate
                    onSubmit={onSubmit}
                    sx={{ mt: 3, width: '100%' }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
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
                                        label="Time Zone Name"
                                        autoFocus
                                        helperText={errors.name}
                                        {...field}
                                    />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="city"
                                control={control}
                                defaultValue=""
                                render={({ field }) =>
                                    <TextField
                                        autoComplete="city"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="city"
                                        label="Time Zone City"
                                        autoComplete="city"
                                        autoFocus
                                        helperText={errors.name}
                                        {...field}
                                    />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Controller
                                name="utc_difference"
                                control={control}
                                defaultValue=""
                                render={({ field }) =>
                                    <TextField
                                        variant="outlined"
                                        required
                                        type="number"
                                        fullWidth
                                        id="utc_difference"
                                        autoComplete="utc_difference"
                                        label="Difference From GMT/UTC"
                                        autoFocus
                                        helperText={errors.name}
                                        {...field}
                                    />}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}