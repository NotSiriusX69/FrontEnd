import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

import ApplicationContainer from "../containers/ApplicationContainer";
import UserInfoContainer from "./UserInfoContainer";

import getUserId from "../utils/GetCookie";

const AdminDashboardContainer = () => {
  const user_id = getUserId();
  if (isNaN(user_id)) {
    console.log("user error");
  }

  return (
    <div className="flex flex-row gap-10 justify-around align-top my-16">
      <UserInfoContainer id={user_id} />
      <ApplicationContainer />
      <div className="flex flex-col gap-12">
        <h3>Admins Functionalities</h3>
        <Link to="/admin/users-table">
          <Button text={"Check Users Table"} color={"primary"} />
        </Link>
        <Button text={"Check Projects Table"} color={"primary"} />
      </div>
    </div>
  );
};

export default AdminDashboardContainer;
