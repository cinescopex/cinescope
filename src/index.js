import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Levels from "./pages/LevelsPage.tsx";
import Courses from "./pages/CoursesPage.tsx";
import Course from "./pages/CoursePage.tsx";

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
root.render(<RouterProvider router={router}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
