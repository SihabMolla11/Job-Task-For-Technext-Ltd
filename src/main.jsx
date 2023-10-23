import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalProvider from "./GlobalContext/GlobalProvider";
import Main from "./Layout/Main";
import "./index.css";
import Home from "./Layout/pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <p>This is error</p>,
    children:[
      {
        path: "/",
        element:<Home/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </GlobalProvider>
);
