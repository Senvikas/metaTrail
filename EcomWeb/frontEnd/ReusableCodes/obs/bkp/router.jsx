import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";

import PageNotFound from "../components/PageNotFound"; // Optional: handle unmatched routes


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // Home page
      { path: "/", element: <Home /> },


      // // Sing In
      // { path: "/signin", element: <SignIn /> },

      // Optional: catch-all route for unmatched paths
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

export default router;
