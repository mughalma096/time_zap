import React from 'react';
import { Link } from 'react-router-dom';
import {Add} from '@mui/icons-material';
import {Button, Toolbar, Container, Box, Typography} from '@mui/material';

import {UserTable} from './index.js';
import {useUser} from "@/contexts/userContext.jsx";

const Users = () => {
    const { user: { admin } } = useUser();

    return (
        <Container component="main" maxWidth="lg">
            <Toolbar />
            <Box sx={{ width: '100%', mb: 4 }}>
                {admin ? (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    mb: 3,
                    p: 3,
                    borderRadius: 2,
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.9), rgba(245,246,250,0.6))',
                    boxShadow: '0 6px 18px rgba(15,23,42,0.08)'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 2
                    }}>
                        <Box>
                            <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
                                User List
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
                                Manage application users and their timezones
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box
                                component="input"
                                placeholder="Search users..."
                                aria-label="Search users"
                                sx={{
                                    px: 2,
                                    py: '8px',
                                    borderRadius: 1,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    outline: 'none',
                                    width: 220,
                                    transition: 'box-shadow 180ms, border-color 180ms',
                                    '&:focus': { boxShadow: (theme) => `0 4px 12px ${theme.palette.primary.main}22`, borderColor: 'primary.main' }
                                }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<Add />}
                                component={Link}
                                to="/add-timezone"
                                size="medium"
                                sx={{ textTransform: 'none', borderRadius: 1 }}
                            >
                                Add
                            </Button>
                        </Box>
                    </Box>
                    <UserTable />
                </Box>
                ) : (
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '220px',
                        borderRadius: 2,
                        p: 4,
                        bgcolor: 'background.default',
                        boxShadow: 'inset 0 1px 0 rgba(0,0,0,0.02)'
                    }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h4" component="h1" sx={{ mb: 1 }}>
                                Welcome to Time Zap
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Track timezones and collaborate with your team.
                            </Typography>
                        </Box>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default Users;