import { type } from "@testing-library/user-event/dist/type/index.js";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/index.js";

export const ProtectRoutes = () => {
  const { cookies } = useAuth();

  const navigate = useNavigate();
  console.log(cookies);
  if (typeof cookies.token !== "undefined") {
    return <Outlet />;
  } else {
    return navigate("/login");
  }
  //   return cookies.token ? <Outlet /> : <Navigate to="/login" exact />;
};
