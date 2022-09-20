import { Navigate, Outlet, Route } from "react-router-dom";
import { useAuthContext } from "../auth";
import Login from "../../pages/Login";

const ProtectedRoutes = () => {
  const isLogged = parseInt(sessionStorage.getItem("isLogged"));

  return isLogged ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
