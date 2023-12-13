// LIBRARY IMPORTS
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// LOCAL IMPORTS
import { Pokemon } from './pages/pokemon/pokemon.tsx';
// STYLES IMPORTS
import './index.css';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Pokemon />,
    }
  ],
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
