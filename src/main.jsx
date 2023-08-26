import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import guestRoutes from './routes/GuestRoutes';
import loginRoutes  from './routes/LoginRoutes';

const applicationRoutes= [...guestRoutes, ...loginRoutes]




const router = createBrowserRouter(applicationRoutes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />

  </React.StrictMode>,
)
