import React from "react";
import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Todo from "./Pages/Todo";
import Calculator from "./Pages/Calculator";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/quiz",
    element: <Quiz />
  },
  {
    path: "/todo",
    element: <Todo />
  },
  {
    path: "/calculator",
    element: <Calculator />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
