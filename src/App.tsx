import { RouterProvider } from "react-router";
import { router } from "./routes";
// import { useState } from "react";

import "./App.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
