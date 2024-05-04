import React from "react";

import Logo from "../components/Logo.jsx";
import LoginContainer from "../containers/LoginContainer.jsx";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-16">
      <Logo class_name={"self-start"} width={65} height={65}></Logo>
      <LoginContainer />
    </div>
  );
};

export default LoginPage;
