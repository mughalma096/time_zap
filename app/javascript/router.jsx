import React from "react";
import {
    createBrowserRouter,
    Navigate, Outlet, useLocation
} from "react-router-dom";

import Root from "@/routes/Root";
import ErrorPage from "@/ErrorPage";
import {TimeZoneForm} from "@/routes/time_zone";
import {Profile, UserForm, Users} from "@/routes/user";
import { Login, Register, Logout } from "@/routes/authentication";

import {getCurrentUser} from "@/services/authService";

const isAuthenticated = () => {
    const user = getCurrentUser();
    return Boolean(user);
};

const ProtectedRoutes = () => {
    const location = useLocation();
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }
    return <Outlet />;
};

const PublicRoutes = () => {
    if (isAuthenticated()) {
        return <Navigate to="/home" replace />;
    }
    return <Outlet />;
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicRoutes />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <ProtectedRoutes />,
                children: [
                    { index: true, element: <Navigate to="/home" /> },
                    { path: "home", element: <Users /> },
                    { path: "profile/:id", element: <Profile /> },
                    { path: "user/:id", element: <UserForm /> },
                    { path: ":user_id/add-timezone", element: <TimeZoneForm /> },
                    { path: "logout", element: <Logout /> },
                ],
            },
            {
                element: <PublicRoutes />,
                children: [
                    { path: "login", element: <Login /> },
                    { path: "register", element: <Register /> },
                ],
            },
            { path: "*", element: <ErrorPage /> },
        ],
    },
]);

export default router;
