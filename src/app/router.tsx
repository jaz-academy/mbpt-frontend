import { createBrowserRouter } from "react-router-dom";
import Layout from "../app/layout";
import Home from "../features/public/pages/HomePage";
import About from "../features/public/pages/AboutPage";
import Test from "../features/mbpt/pages/TestPage";
import Result from "../features/mbpt/pages/ResultPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/test", element: <Test /> },
      { path: "/result/:id", element: <Result /> },
    ],
  },
]);
