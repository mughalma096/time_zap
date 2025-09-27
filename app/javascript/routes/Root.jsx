import React from "react";
import {CssBaseline} from "@mui/material";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import { Navbar, Footer } from "@/components";

export default function Root() {
    return (
        <>
            <CssBaseline />
            <ToastContainer />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}