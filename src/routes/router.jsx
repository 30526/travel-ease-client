import { createBrowserRouter } from "react-router";
import LayOut from "../layouts/LayOut";
import Home from "../pages/homePage/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

export default router;
