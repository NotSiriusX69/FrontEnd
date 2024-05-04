import React from "react";
import Button from "../components/Button";

import AdminInfoContainer from "../containers/AdminInfoContainer";
import ApplicationContainer from "../containers/ApplicationContainer";

// /type, placeholder, name, value, onChange, class_name
const AdminDashboardContainer = () => {
  return (
    <div className="flex flex-row gap-10 justify-around align-top my-16">
      <AdminInfoContainer />
      <ApplicationContainer />
      <div className="flex flex-col gap-12">
        <h3>Admins Functionalities</h3>
        <Button text={"Check Users Table"} color={"primary"} />
        <Button text={"Check Projects Table"} color={"primary"} />
      </div>
    </div>
  );
};

export default AdminDashboardContainer;
