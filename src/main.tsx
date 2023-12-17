// LIBRARY IMPORTS
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// LOCAL IMPORTS
import { ErrorPage } from './pages/error/error.tsx';
import PokemonList from './pages/pokemon-list/pokemon-list.tsx';
import PokemonDetail from './pages/pokemon-detail/pokemon-detail.tsx';
// STYLES IMPORTS
import './index.scss';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <PokemonList />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:id",
      element: <PokemonDetail />,
      errorElement: <ErrorPage />,
    },
  ],
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
