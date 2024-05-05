import React, { useEffect, useState } from "react";

import InputBox from "../components/InputBox";

const UserInfoContainer = () => {
  useEffect(() => {
    retrieveData();
  }, []);

  const [retrievedData, setretrievedData] = useState({
    userId: 0,
    userName: "",
    email: "",
    password: "",
    isAdmin: false,
    createdAt: "",
  });
  
  const retrieveData = async (e) => {
    try {
      const response = await fetch(
        `https://localhost:7016/get-user-info?id=${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const status = response.status;
      const data = await response.json();

      if (status == 200) {
        setretrievedData(data);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h3>{retrievedData.userName}</h3>
      <p className="">User Id</p>
      <InputBox
        type={"text"}
        placeholder={"id"}
        name={"id"}
        value={retrievedData.userId}
      />
      <p className="">User Name</p>
      <InputBox
        type={"text"}
        placeholder={"User Name"}
        name={"username"}
        value={retrievedData.userName}
      />
      <p className="">Email</p>
      <InputBox
        type={"email"}
        placeholder={"Email"}
        name={"email"}
        value={retrievedData.email}
      />
      <p className="">Password</p>
      <InputBox
        type={"text"}
        placeholder={"Password"}
        name={"password"}
        value={retrievedData.password}
      />
      <p className="">isAdmin</p>
      <InputBox
        type={"text"}
        placeholder={"Is Admin"}
        name={"isadmin"}
        value={retrievedData.isAdmin}
      />
      <p className="">Created At</p>
      <InputBox
        type={"text"}
        placeholder={"Created At"}
        name={"createdat"}
        value={retrievedData.createdAt}
      />
    </div>
  );
};

export default UserInfoContainer;
