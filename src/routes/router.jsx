import { createBrowserRouter } from "react-router";
import LayOut from "../layouts/LayOut";
import Home from "../pages/homePage/Home";
import LoginPage from "../pages/loginPage/LoginPage";
import Register from "../pages/RegisterPage/Register";
import AllVehicles from "../pages/allVehicles/AllVehicles";
import MyVehicles from "../pages/myVehicles/MyVehicles";
import MyBookings from "../pages/myBookings/MyBookings";
import AddVehicles from "../pages/addVehicles/AddVehicles";
import CarDetails from "../pages/carDetails/CarDetails";
import UpdateVehicle from "../pages/updateVehicle/UpdateVehicle";

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
      {
        path: "allVehicles",
        Component: AllVehicles,
      },
      {
        path: "addVehicles",
        Component: AddVehicles,
      },
      {
        path: "myVehicles",
        Component: MyVehicles,
      },
      {
        path: "myBookings",
        Component: MyBookings,
      },
      {
        path: "carDetails/:id",
        Component: CarDetails,
      },
      {
        path: "updateVehicle/:id",
        Component: UpdateVehicle,
      },
    ],
  },
]);

export default router;
