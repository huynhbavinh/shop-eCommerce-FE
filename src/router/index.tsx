import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login.tsx"
import Layout from "./layout"
import Landing from "../pages/Landing.tsx";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                element: <Landing />,
                path: '/'
            },
            {
                element: <Landing />,
                path: '/home'
            }
        ]
    },
    {
        element: <Login />,
        path: "/login"
    }
]);

export default router;