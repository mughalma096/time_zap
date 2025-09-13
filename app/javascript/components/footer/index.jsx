import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Menu, Avatar, Button, Tooltip, MenuItem } from '@mui/material';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" sx={{ m: "auto"}} >
            {'Copyright © '}
            <Link color="inherit" to="/">
                TimeZap
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}

const Footer = () => {
    return (
        <>
            <AppBar position="fixed" color="inherit" sx={{ top: 'auto', bottom: 0 }}>
                <Toolbar>
                    <Copyright />
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Footer;
