import { Navigate } from "react-router-dom";
import checkAuthentication from "../utils/checkAuthentication";

const PrivateRoute = ({ Component }) => {

  let isAuthenticated = checkAuthentication();

  return isAuthenticated ? <Component /> : <Navigate to="/signin" />;
};
export default PrivateRoute;
