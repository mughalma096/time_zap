import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";
import { Provider } from "./contexts/userContext";
// import { navbar, Users, UserForm, Profile, TimeZoneForm, Index } from './components';
// import { NotFound, LoginForm, RegisterForm, Logout } from './components/Authentication';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    window.addEventListener('popstate', (event) => {
        window.location.href = event.currentTarget.location.href
    });

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <></>,
        },
    ]);

    return (
        <Provider>
            <RouterProvider router={router} />
        </Provider>
    );
};

export default App;
