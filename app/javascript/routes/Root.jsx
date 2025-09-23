import React from "react";
import {CssBaseline} from "@mui/material";
import { ToastContainer } from 'react-toastify';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Users from "@/routes/user/Users.jsx";

// import Dashboard from "../components/Dashboard";
// import { Navbar, Users, UserForm, Profile, TimeZoneForm, Footer } from './components';
import { Login, Register, Logout } from './authentication';

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