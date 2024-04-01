import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login.tsx"
import Layout from "./layout"
import Landing from "../pages/Landing.tsx";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                element: <Login />,
                path: "/login"
            },
            {
                element: <Landing />,
                path: '/'
            }
        ]
    }
]);

export default router;