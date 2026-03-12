import { createBrowserRouter } from "react-router";
import Head from "../Head/Head";
import Home from "../Page/Home";
import Apps from "../Page/App";
import Installation from "../Page/Installation";
import AppsDetails from "../Page/Details";
import Error from "../Page/Error";
import Login from "../Page/Login";
import Register from "../Page/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Head />,
    errorElement: <Error />,
    hydrateFallbackElement: <p><span className="loading loading-spinner loading-xl"></span></p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/app/:id",
        Component: AppsDetails,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
