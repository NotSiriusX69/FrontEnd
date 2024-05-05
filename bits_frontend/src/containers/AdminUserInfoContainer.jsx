import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import InputBox from "../components/InputBox";
import Button from "../components/Button";

import getUserId from "../utils/GetCookie";

const AdminUserInfoContainer = () => {
  const { id } = useParams();

  useEffect(() => {
    retrieveData();
    retrieveProjects();
  }, [id]);

  const [retrievedProjects, setretrievedProjects] = useState([]);

  const [retrievedData, setretrievedData] = useState({
    userId: 0,
    userName: "",
    email: "",
    password: "",
    isAdmin: false,
    createdAt: "",
  });

  // Retrieve User Info
  const retrieveData = async (e) => {
    console.log(id);
    try {
      const response = await fetch(
        `https://localhost:7016/admin/user-info/${id}`,
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

      console.log(data);

      if (status == 200) {
        setretrievedData(data);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  // Retrieve User Projects
  const retrieveProjects = async (e) => {
    try {
      const response = await fetch(
        `https://localhost:7016/admin/user-info-projects/${id}`,
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

      console.log(data);

      if (status == 200) {
        setretrievedProjects(data);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  // Update isAdmin for User
  const updateIsAdmin = async (e) => {
    try {
      const response = await fetch(
        `https://localhost:7016/admin/update-is-admin?sender_id=${getUserId()}&id=${id}`,
        {
          method: "PUT",
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
      } else {
        console.error("Error", error);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="flex flex-row gap-8 justify-between p-2 m-2">
      <div className="flex flex-col gap-6">
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
        <div className="flex flex-col gap-2">
          <Button text="Delete User" color="danger" />
          <Button
            text="Change Administratorship"
            color="green"
            func={updateIsAdmin}
          />
        </div>
      </div>
      <div className="m-8 p-2 w-full">
        <table>
          <thead>
            <tr>
              <th>Project Id</th>
              <th>Project Name</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {retrievedProjects.length > 0 &&
              retrievedProjects.map((project) => (
                <tr key={project.projectId}>
                  <td>{project.projectId}</td>
                  <td>{project.name}</td>
                  <td>{project.categoryId}</td>
                  <td>{project.description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUserInfoContainer;
