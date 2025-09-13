import React from "react";
import {CssBaseline} from "@mui/material";
import { ToastContainer } from 'react-toastify';

import Navbar from "../components/./navbar";
import Footer from "../components/./footer";

export default function Root() {
    return (
        <>
            <div style={{ display: 'flex', marginBottom: 40 }}>
                <CssBaseline />
                <ToastContainer />
                <Navbar />
                {/*<Routes>*/}
                {/*    <Route path="/home" element={<Users user={user} reload={reload} setReload={setReload} />} />*/}
                {/*    /!*<Route path="/profile/:id" element={<Profile reload={reload} setReload={setReload} />} />*!/*/}
                {/*    <Route path='/user/:id' element={<UserForm reload={reload} setReload={setReload} />} />*/}
                {/*    <Route path="/register" element={<RegisterForm reload={reload} setReload={setReload} />} />*/}
                {/*    <Route path="/:user_id/add-timezone" element={<TimeZoneForm reload={reload} setReload={setReload} />} />*/}
                {/*    <Route path="/login" element={<LoginForm reload={reload} setReload={setReload} />} />*/}
                {/*    <Route path="/logout" element={<Logout />} />*/}
                {/*    <Route path="/not-found" element={<NotFound />} />*/}
                {/*    /!*<Redirect from="/" exact to="/home" />*!/*/}
                {/*    /!*<Redirect to="/not-found" />*!/*/}
                {/*</Routes>*/}
                <Footer />
            </div>
        </>
    )
}