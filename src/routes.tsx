import { createBrowserRouter } from "react-router-dom";

// Importando as páginas
import { Home } from "./pages/home";
import { SaibaMais } from "./pages/saibamais";
import { NotFound } from "./pages/notfound";

import { Layout } from "./components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/saibamais",
        element: <SaibaMais />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
