import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./src/Home";
import DoctorVerification from "./src/doctorVerificationpage";
import FindDoctorPage from "./src/findDoctorPage";
import Login from "./src/loginPage";
import IndividualRegisterPage from "./src/individualRegisterPage";
import SosPage from "./src/sosPage";
import DoctorRegisterPage from "./src/doctorRegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/doctorVerificationpage",
    element: <DoctorVerification />,
  },
  {
    path: "/findDoctorPage",
    element: <FindDoctorPage />,
  },
  {
    path: "/loginPage",
    element: <Login />,
  },
  {
    path: "/individualRegisterPage",
    element: <IndividualRegisterPage />,
  },
  {
    path: "/sosPage",
    element: <SosPage />,
  },
  {
    path: "/doctorRegisterPage",
    element: <DoctorRegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
