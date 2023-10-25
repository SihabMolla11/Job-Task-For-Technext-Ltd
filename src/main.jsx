import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalProvider from "./GlobalContext/GlobalProvider";
import Main from "./Layout/Main";
import ErrorPage from "./Layout/pages/ErrorPage";
import Home from "./Layout/pages/Home/Home";
import Login from "./Layout/pages/Login/Login";
import RocketDetail from "./Layout/pages/RocketDetail/RocketDetail";
import SignUp from "./Layout/pages/SignUp/SignUp";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "rocket/:id",
        element: <RocketDetail />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <React.StrictMode>
      <Toaster />
      <RouterProvider router={router} />
    </React.StrictMode>
  </GlobalProvider>
);
