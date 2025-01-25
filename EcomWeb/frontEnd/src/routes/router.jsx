import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import ShopPage from "../components/ShopPage"; // New component for card-specific pages
import PageNotFound from "../components/PageNotFound"; // Optional: handle unmatched routes
import SignIn from "../components/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // Home page
      { path: "/", element: <Home /> },

      // Dynamic route for cards
      { path: "shop/:type", element: <ShopPage /> },

      // Sing In
      { path: "/signin", element: <SignIn /> },

      // Optional: catch-all route for unmatched paths
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

export default router;
