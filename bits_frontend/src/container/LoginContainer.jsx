import React from "react";

import Button from "../components/Button.jsx";
import InputBox from "../components/InputBox.jsx";

const LoginContainer = () => {
  const handleSubmit = (event) => {};

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="pb-4">
        <h2>Login</h2>
        <p>Please fill your credentials</p>
      </div>
      <InputBox type={"email"} placeholder={"Email"} name={"email"} />
      <InputBox type={"password"} placeholder={"Password"} name={"password"} />
      <Button type="submit" color={"primary"} text={"Sign In"} />
    </form>
  );
};

export default LoginContainer;
