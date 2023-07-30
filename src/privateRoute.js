import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ element: Component, path, ...rest }) => {
  const token = localStorage.getItem("loginToken");
  if (token) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;
