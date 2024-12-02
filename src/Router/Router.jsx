import { createBrowserRouter } from "react-router";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
]);
