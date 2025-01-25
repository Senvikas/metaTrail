import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import CounterPage from '../components/CounterPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="counter" element={<CounterPage />} />
    </Route>
  )
);

export default router;
