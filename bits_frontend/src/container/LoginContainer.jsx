import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../components/Button.jsx";
import InputBox from "../components/InputBox.jsx";

const LoginContainer = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const errorText = `${error ? "Please make sure Email or Password are correct" : ""}`;
  const errorBorder = `${error ? "error-border" : ""}`;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7016/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const status = response.status;
      const isAdmin = await response.json();

      console.log(isAdmin);

      if (status == 401) {
        setError(true);
      } else if (status == 200) {
        if (isAdmin == true) {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="pb-4">
        <h2>Login</h2>
        <p>Please fill your credentials</p>
      </div>
      <InputBox
        type={"email"}
        placeholder={"Email"}
        name={"email"}
        onChange={handleInputChange}
        value={formData.email}
        class_name={`${errorBorder}`}
      />
      <InputBox
        type={"password"}
        placeholder={"Password"}
        name={"password"}
        onChange={handleInputChange}
        value={formData.password}
        class_name={`${errorBorder}`}
      />
      <Link to="/forget-password">Forget Password?</Link>
      <p className="error-text">{errorText}</p>
      <Button type="submit" color={"primary"} text={"Sign In"} />
      <span className="text-white">
        New Here? <Link to="/signup">Sign Up</Link>
      </span>
    </form>
  );
};

export default LoginContainer;
