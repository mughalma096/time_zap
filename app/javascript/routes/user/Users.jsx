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
                    <>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mb: 3
                        }}>
                            <Typography variant="h4" component="h1">
                                User List
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<Add />}
                                component={Link}
                                to="/add-timezone"
                                size="medium"
                            >
                                Add
                            </Button>
                        </Box>
                        <UserTable />
                    </>
                ) : (
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '200px'
                    }}>
                        <Typography variant="h4" component="h1">
                            Welcome to Time Zap
                        </Typography>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default Users;