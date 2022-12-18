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
import Projects from "./routes/projects";
import Project from "./routes/projet";

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
        children : [
          {
            path: "/projets",
            element: <Main />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/projet/:idproject",
            element: <Main />,
            errorElement: <ErrorPage />,
          },
        ]
      },  
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);