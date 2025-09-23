import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";

import Users from "@/routes/user/Users.jsx";
import { Login, Register } from "@/routes/authentication";
import ErrorPage from "@/ErrorPage.jsx";
import Root from "@/routes/Root.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
]);
export default router;