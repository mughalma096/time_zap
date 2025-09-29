import React from "react";
import { useRouteError } from "react-router-dom";
import { ErrorOutlineRounded } from '@mui/icons-material';
import { Box, Container, CssBaseline, Paper, Avatar, Typography, Button } from "@mui/material";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    const handleRetry = () => {
        window.location.reload();
    };

    const handleGoHome = () => {
        window.location.href = '/';
    };

    return (
        <Container maxWidth="sm">
            <CssBaseline />
            <Paper
                elevation={6}
                sx={{
                    mt: 8,
                    p: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 2,
                }}>
                <Avatar sx={{
                    bgcolor: 'error.main',
                    width: 64,
                    height: 64,
                    mb: 3
                }}>
                    <ErrorOutlineRounded sx={{ fontSize: 40 }} />
                </Avatar>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        width: '100%',
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Oops!
                    </Typography>
                    <Typography variant="h6" color="text.secondary" align="center">
                        Sorry, an unexpected error has occurred.
                    </Typography>
                    <Typography variant="body1" color="error" sx={{ mt: 1 }}>
                        {error?.statusText || error?.message || 'Unknown error'}
                    </Typography>
                    <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                        <Button variant="contained" color="primary" onClick={handleRetry}>
                            Try Again
                        </Button>
                        <Button variant="outlined" color="primary" onClick={handleGoHome}>
                            Go Home
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}