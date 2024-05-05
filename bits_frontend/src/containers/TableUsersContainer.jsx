import React from "react";
import { useNavigate } from "react-router-dom";

const TableUsersContainer = ({ users }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate( `/admin/user-info/${id}`);
  };

  return (
    <div className="m-8 p-2">
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>isAdmin</th>
            <th>CreatedAt</th>
            <th>Projects</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user) => (
              <tr key={user.userId}>
                <button onClick={() => handleClick(user.userId)}>
                  <td>{user.userId}</td>
                </button>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.isAdmin.toString()}</td>
                <td>{user.createdAt}</td>
                <td>{user.projectsNumber}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUsersContainer;
