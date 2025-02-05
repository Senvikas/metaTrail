import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";

import PageNotFound from "../components/PageNotFound"; // Optional: handle unmatched routes


import Fip from "../components/Fip";
import Fop from "../components/Fop";
import CA from "../components/CA";
import EP from "../components/EP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // Home page
      { path: "/", element: <Home /> },


      // // Sing In
      { path: "/Fip", element: <Fip /> },

      { path: "/Fop", element: <Fop /> },

      { path: "/CA", element: <CA /> },

      { path: "/Comp_App", element: <EP /> },
      // Optional: catch-all route for unmatched paths
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

export default router;
