import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/HomePage/HomePage"
import Root from "../layouts/Root"

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
        ],
    },
   /*  {
        path:"/",
        element:<Root2/>,
        children: [
            {
                path:"/",
                element: <Home/>,
            }
        ]
    } */
]);

export default router


