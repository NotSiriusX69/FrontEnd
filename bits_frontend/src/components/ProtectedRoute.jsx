import { Navigate, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import getUserId from "../utils/GetCookie";

const PrivateRoute = ({ Component }) => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user_id = getUserId();
        if (isNaN(user_id)) {
          navigate("/");
        }
        const response = await fetch("https://localhost:7016/get-user-data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(user_id),
        });

        const status = response.status;
        const data = await response.json();

        if (status === 200) {
          setIsAuth(data.isAdmin);
        } else if (status === 401 || status == 400) {
          setIsAuth(false);
          navigate("/signin");
        }
      } catch (error) {
        console.error("Error:", error);
        setIsAuth(false);
        navigate("/");
      }
    };

    if (isAuth === null) {
      checkAuth();
    }
  }, [isAuth, navigate]);

  if (isAuth === null) {
    return null;
  }

  return isAuth ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
