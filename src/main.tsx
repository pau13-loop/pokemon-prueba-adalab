// LIBRARY IMPORTS
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// LOCAL IMPORTS
import { ErrorPage } from './pages/error/error.tsx';
// STYLES IMPORTS
import './index.scss';
import PokemonList from './pages/pokemon-list/pokemon-list.tsx';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <PokemonList />,
      errorElement: <ErrorPage />,
    },
    // {
    //   path: "/:id",
    //   element: <PokemonDetail />,
    //   errorElement: <ErrorPage />,
    // },
  ],
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
