import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Levels from "./pages/LevelsPage";
import Courses from "./pages/CoursesPage";
import Course from "./pages/CoursePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/levels",
    element: <Levels />,
  },
  {
    path: "/courses/:level",
    element: <Courses />,
  },
  {
    path: "/course/:level/:id",
    element: <Course />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
