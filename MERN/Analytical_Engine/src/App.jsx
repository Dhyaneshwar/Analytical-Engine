import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import YourPath from "./yourPath/YourPath.jsx";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/yourPath",
    element: <YourPath />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
