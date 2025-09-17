import React from "react";
import {CssBaseline} from "@mui/material";
import { ToastContainer } from 'react-toastify';

import Navbar from "../components/./navbar";
import Footer from "../components/./footer";

// import Dashboard from "../components/Dashboard";
// import { Navbar, Users, UserForm, Profile, TimeZoneForm, Footer } from './components';
// import { NotFound, Login, Register, Logout } from './components/Authentication';

export default function Root() {
    return (
        <>
            <div style={{ display: 'flex', marginBottom: 40 }}>
                <CssBaseline />
                <ToastContainer />
                <Navbar />
                <Footer />
            </div>
        </>
    )
}