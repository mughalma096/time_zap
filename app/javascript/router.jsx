import React from "react";
import {
    createBrowserRouter,
    Navigate, Outlet, useLocation
} from "react-router-dom";

import Root from "@/routes/Root";
import ErrorPage from "@/ErrorPage";
import { TimeZoneForm } from "@/routes/time_zone";
import { getCurrentUser } from "@/services/authService";
import { Profile, UserForm, Users } from "@/routes/user";
import { Login, Register, Logout } from "@/routes/authentication";

const isAuthenticated = () => Boolean(getCurrentUser());

const ProtectedRoutes = () => {
    const location = useLocation();
    return (
        isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace state={{ from: location }} />
    )
};

const PublicRoutes = () => {
    return (
        isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Outlet />
    )
}

const router = createBrowserRouter([
    {
        path: "/",  // base
        element: <PublicRoutes />,
        errorElement: <ErrorPage />,
        children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
        ],
    },
    {
        path: "/",
        element: <ProtectedRoutes />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <Root />,
                children: [
                            { index: true, element: <Navigate to="/dashboard" /> },
                            { path: "dashboard", element: <Users /> },
                            { path: "profile/:id", element: <Profile /> },
                            { path: "user/:id", element: <UserForm /> },
                            { path: ":user_id/add-timezone", element: <TimeZoneForm /> },
                            { path: "logout", element: <Logout /> },
                        ],
                    },
        ],
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

export default router;
