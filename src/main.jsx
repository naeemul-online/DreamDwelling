import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import UpdateProfile from "./Pages/UpdateProfile/UpdateProfile";
import Properties from "./Pages/Properties/Properties";
import Property from "./Pages/Property/Property";
import Login from "./Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/update-profile",
        element:<UpdateProfile></UpdateProfile>
      },
      {
        path: "/properties",
        element:<Properties></Properties>
      },
      {
        path: "/property",
        element:<Property></Property>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
