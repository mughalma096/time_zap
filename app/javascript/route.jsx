import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "./routes/authentication/Login.jsx";
import ErrorPage from "./error-page.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
]);
export default router;