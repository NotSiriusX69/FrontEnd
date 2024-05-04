import React from "react";

import AdminDashboardContainer from "../containers/AdminDashboardContainer";
import Logo from "../components/Logo";

const AdminDashboardPage = () => {
  return (
    <div className="flex flex-col px-6">
      <div className="flex flex-row justify-between">
        <div className="">
          <h2>Welcome Sirius </h2>
          <h3>Admins Dashboard</h3>
        </div>
        <Logo class_name={"self-start"} width={65} height={65} />
      </div>
      <AdminDashboardContainer />
    </div>
  );
};

export default AdminDashboardPage;
