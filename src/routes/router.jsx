import { createBrowserRouter } from "react-router";
import LayOut from "../layouts/LayOut";
import Home from "../pages/homePage/Home";
import LoginPage from "../pages/loginPage/LoginPage";
import Register from "../pages/RegisterPage/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;
