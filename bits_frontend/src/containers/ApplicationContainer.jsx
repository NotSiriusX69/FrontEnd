import React, { useEffect, useState } from "react";

import InputBox from "../components/InputBox";

const ApplicationContainer = () => {
  useEffect(() => {
    retrieveAppData();
  }, []);

  const [retrievedAppData, setretrievedAppData] = useState({
    usersNumber: 0,
    adminsNumber: 0,
    projectsNumber: 0,
    tasksNumber: 0,
  });

  const retrieveAppData = async (e) => {
    try {
      const response = await fetch(
        "https://localhost:7016/admin/get-app-info",
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
        setretrievedAppData(data);
        console.log(retrievedAppData);
        console.log("pro " + retrievedAppData.ProjectsNumber);
      }
    } catch (error) {
      console.error("Error ", error);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <h3>Bits Application Info</h3>
      <p className="">Users Number</p>
      <InputBox
        type={"number"}
        placeholder={"Users Number"}
        name={"users-nb"}
        value={retrievedAppData.usersNumber}
        onChange={null}
      />
      <p className="">Projects Numbers</p>
      <InputBox
        type={"number"}
        placeholder={"Projects Number"}
        name={"projects-nb"}
        value={retrievedAppData.projectsNumber}
        onChange={null}
      />
      <p className="">Tasks Numbers</p>
      <InputBox
        type={"number"}
        placeholder={"Tasks Number"}
        name={"email"}
        value={retrievedAppData.tasksNumber}
        onChange={null}
      />
      <p className="">Admins Numbers</p>
      <InputBox
        type={"number"}
        placeholder={"Email"}
        name={"Admins Number"}
        value={retrievedAppData.adminsNumber}
        onChange={null}
      />
    </div>
  );
};

export default ApplicationContainer;
