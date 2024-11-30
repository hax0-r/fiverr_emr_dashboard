import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../Pages/Login";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
])