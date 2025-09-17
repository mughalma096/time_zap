import React from "react";
import { useRouteError } from "react-router-dom";
import { ErrorOutlineRounded } from '@mui/icons-material';
import {Box, Container, CssBaseline, Paper, Avatar, Typography} from "@mui/material";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <Container>
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
                <Avatar sx={{ bgcolor: 'error.main', width: 48, height: 48 }}>
                    <ErrorOutlineRounded fontSize="large" />
                </Avatar>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    <h1>Oops!</h1>
                    <Typography>Sorry, an unexpected error has occurred.</Typography>
                    <Typography>
                        <i>{error.statusText || error.message}</i>
                    </Typography>
                </Box>
            </Paper>
        </Container>
    );
}