import React from "react";

import Logo from "../components/Logo.jsx";
import SignUpContainer from "../containers/SignUpContainer.jsx";

const SignUpPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Logo class_name={"self-start"} width={65} height={65}></Logo>
      <SignUpContainer />
    </div>
  );
};

export default SignUpPage;
