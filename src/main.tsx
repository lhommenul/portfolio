import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./error-page";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

/* existing imports */
import Root from "./routes/root";
import Main from "./routes/main";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children : [
      {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
      },  
    ]
  },
  {
    path: "/accueil",
    element: <Main />,
    errorElement: <ErrorPage />,
  },  
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);