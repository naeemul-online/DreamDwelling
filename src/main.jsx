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
import EstateSingleDetails from "./Components/EstateSingleDetails/EstateSingleDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { HelmetProvider } from "react-helmet-async";
import News from "./Pages/News/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/estate-single-details/:id",
        element: (
          <PrivateRoute>
            <EstateSingleDetails></EstateSingleDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/news",
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
        loader: () => fetch("/news.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </FirebaseProvider>
  </React.StrictMode>
);
