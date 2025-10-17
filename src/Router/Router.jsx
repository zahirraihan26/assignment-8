import { createBrowserRouter } from "react-router";
import Head from "../Head/Head";
import Home from "../Page/Home";







const router = createBrowserRouter([

    {
        path: "/",
        element: <Head></Head>
        

    },
    {
        path: "/",
        Component:Home
    }
])


export default router;