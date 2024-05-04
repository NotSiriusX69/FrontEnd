import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button.jsx";
import InputBox from "../components/InputBox.jsx";

const SignupContainer = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const nameRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const passwordRegex = /^(?=.*[A-Z]).{8,}$/;

  let isUserNameCorrect =
    nameRegex.test(formData.userName) || formData.userName === "";
  let isEmailCorrect = emailRegex.test(formData.email) || formData.email === "";
  let isPasswordCorrect =
    passwordRegex.test(formData.password) || formData.password === "";

  const [error, setError] = useState(false);
  const errorText = `${error ? "unexpected Error, Please try again later" : ""}`;

  const [error401, setError401] = useState(false);
  const errorText401 = `${error ? "Unauthorized Error, Please try again later" : ""}`;

  const UserNameBorderError = `${!isUserNameCorrect ? "error-border" : ""}`;
  const EmailBorderError = `${!isEmailCorrect ? "error-border" : ""}`;
  const PasswordBorderError = `${!isPasswordCorrect ? "error-border" : ""}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7016/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = response.status;
      console.log(formData.userName, formData.email, formData.password);
    } catch (error) {
      console.error("Sign up failed ", error);
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
        <h2>Sign Up</h2>
        <p>Please fill your credentials</p>
      </div>
      <InputBox
        type={"text"}
        placeholder={"User name"}
        name={"userName"}
        value={formData.userName}
        onChange={handleInputChange}
        class_name={`${UserNameBorderError}`}
      />
      <InputBox
        type={"email"}
        placeholder={"Email"}
        name={"email"}
        value={formData.email}
        onChange={handleInputChange}
        class_name={`${EmailBorderError}`}
      />
      <InputBox
        type={"password"}
        placeholder={"Password"}
        name={"password"}
        value={formData.password}
        onChange={handleInputChange}
        class_name={`${PasswordBorderError}`}
      />

      {!isUserNameCorrect && (
        <p className="error-text username">
          Last Name should Only contain letters
        </p>
      )}
      {!isEmailCorrect && (
        <p className="error-text email">Please input a valid email</p>
      )}
      {!isPasswordCorrect && (
        <p className="error-text password">
          Password must have 1 Capital letter and 8 characters long
        </p>
      )}
      <Button type="submit" color={"primary"} text={"Sign Up"} />
      <span className="text-white">
        Already Have an account? <Link to="/signin">Log In</Link>
      </span>
    </form>
  );
};

export default SignupContainer;
