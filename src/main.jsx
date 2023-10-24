import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalProvider from "./GlobalContext/GlobalProvider";
import Main from "./Layout/Main";
import Home from "./Layout/pages/Home/Home";
import RocketDetail from "./Layout/pages/RocketDetail/RocketDetail";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>This is error</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "rocket/:id",
        element: <RocketDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </GlobalProvider>
);
