import Cookies from "js-cookie";

const getUserId = () => {
  let user_id = Cookies.get("user_id");

  return parseInt(user_id);
};

export default getUserId;
