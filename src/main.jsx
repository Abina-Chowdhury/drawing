import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './page/Home/Home.jsx';
import Root from './page/Root/Root.jsx';
import './index.css'
import AllArtAndCraft from './page/AllArtAndCraft/AllArtAndCraft.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-Art-&-craft-Items",
        element: <AllArtAndCraft />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
