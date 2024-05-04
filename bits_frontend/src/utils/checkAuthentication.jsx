import React from "react";
import Cookies from "js-cookie";

const checkAuthentication = () => {
  let auth = false;

  let user_id = Cookies.get("session_id");

  console.log("Fds" + user_id);

  if (user_id != null && user_id != undefined && user_id.trim() !== "") {
    auth = true;
  } else {
    auth = false;
  }

  return auth;
};

export default checkAuthentication;
