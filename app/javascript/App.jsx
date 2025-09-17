import React from 'react';
import {
    RouterProvider,
} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";

import router from "./router.jsx";
import { Provider } from "./contexts/userContext";

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const theme = createTheme();
    window.addEventListener('popstate', (event) => {
        window.location.href = event.currentTarget.location.href
    });

    return (
        <ThemeProvider theme={theme}>
            <Provider>
                <RouterProvider router={router} />
            </Provider>
        </ThemeProvider>
    );
};

export default App;
