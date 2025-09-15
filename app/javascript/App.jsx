import React from 'react';
import {
    RouterProvider,
} from "react-router-dom";

import router from "./route.jsx";
import { Provider } from "./contexts/userContext";

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    window.addEventListener('popstate', (event) => {
        window.location.href = event.currentTarget.location.href
    });

    return (
        <Provider>
            <RouterProvider router={router} />
        </Provider>
    );
};

export default App;
