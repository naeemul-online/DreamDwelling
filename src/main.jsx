import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import UpdateProfile from "./Pages/UpdateProfile/UpdateProfile";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
import NotFound from "./PrivateRoute/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('data.json'),

      },
      {
        path: "/update-profile",
        element:<UpdateProfile></UpdateProfile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>    
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);
