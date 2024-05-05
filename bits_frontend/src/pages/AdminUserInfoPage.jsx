import React from 'react'

import AdminUserInfoContainer from '../containers/AdminUserInfoContainer'

import Logo from "../components/Logo";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

const UserInfoPage = () => {
  return (
    <div className="flex flex-col px-6">
    <div className="flex flex-row justify-between">
      <div>
        <h2>Users Info</h2>
        <h3></h3>
      </div>
      <Logo class_name={"self-start"} width={65} height={65} />
    </div>
    <AdminUserInfoContainer />
  </div>
  )
}

export default UserInfoPage