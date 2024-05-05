import React, { useState, useEffect } from "react";

import TableUsersContainer from "../containers/TableUsersContainer";
import Logo from "../components/Logo";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

const UsersTablePage = () => {
  useEffect(() => {
    retrieveList();
  }, []);

  const [error, setError] = useState(false);

  const [usersList, setusersList] = useState([]);

  const [searchedData, setSearchData] = useState({ searchValue: "" });

  const handleInputChange = (e) => {
    setSearchData({
      ...searchedData,
      [e.target.name]: e.target.value,
    });
  };

  // Retrieve Searched List by string
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://localhost:7016/admin/get-searched-users?searchValue=${searchedData.searchValue}`,
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

      setusersList(data);

      if (usersList.length == 0) {
        setError(true);
      } else if (status == 200) {
        setError(false);
        setusersList(data);
      } else if (status == 400) {
        setError(true);
      }
    } catch (error) {
      console.error("error: ", error);
    }
  };

  // Retrieve all users from endpoint and Store them in array
  const retrieveList = async (e) => {
    try {
      const response = await fetch("https://localhost:7016/admin/get-users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const status = response.status;
      const data = await response.json();

      if (status == 200) {
        console.log(data);
        setusersList(data);
        console.log(usersList);
      } else {
        console.log("No users");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div className="flex flex-col px-6">
      <div className="flex flex-row justify-between">
        <div>
          <h2>Users Table</h2>
        </div>
        <Logo class_name={"self-start"} width={65} height={65} />
      </div>
      <div className="flex justify-center gap-4 w-full px-48 mt-12">
        <InputBox
          class_name="search"
          type="text"
          placeholder="Search for specific User in database"
          name={"searchValue"}
          onChange={handleInputChange}
          value={searchedData.searchValue}
        />
        <Button text="Search" color="primary" func={handleSubmit} />
      </div>
      {error && (
        <p className="error-text password pl-48 pt-2">Input field cannot be empty or no user has been found</p>
      )}
      <TableUsersContainer users={usersList} />
    </div>
  );
};

export default UsersTablePage;
