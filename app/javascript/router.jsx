import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "./routes/authentication/Login.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Register from "./routes/authentication/Register.jsx";
import Root from "./routes/Root.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
]);
export default router;