import { createBrowserRouter } from "react-router";
import LayOut from "../layouts/LayOut";
import Home from "../pages/homePage/Home";
import LoginPage from "../pages/loginPage/LoginPage";
import Register from "../pages/RegisterPage/Register";
import AllVehicles from "../pages/allVehicles/AllVehicles";
import MyVehicles from "../pages/myVehicles/MyVehicles";
import MyBookings from "../pages/myBookings/MyBookings";
import CarDetails from "../pages/carDetails/CarDetails";
import UpdateVehicle from "../pages/updateVehicle/UpdateVehicle";
import AddVehicles from "../pages/addVehicles/AddVehicles";
import PrivateRoute from "../private/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddVehicles></AddVehicles>
          </PrivateRoute>
        ),
      },
      {
        path: "myVehicles",
        element: (
          <PrivateRoute>
            <MyVehicles></MyVehicles>
          </PrivateRoute>
        ),
      },
      {
        path: "myBookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "carDetails/:id",
        element: (
          <PrivateRoute>
            <CarDetails></CarDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "updateVehicle/:id",
        Component: UpdateVehicle,
      },
    ],
  },
]);

export default router;
