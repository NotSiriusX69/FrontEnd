import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoute from "./components/ProtectedRoute";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import UsersTablePage from "./pages/UsersTablePage";
import AdminUserInfoPage from "./pages/AdminUserInfoPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/profile"
          element={<PrivateRoute Component={ProfilePage} />}
        />
        <Route path="/dashboard" element={<SignUpPage />} />
        <Route
          path="/admin/dashboard"
          element={<ProtectedRoute Component={AdminDashboardPage} />}
        />
        <Route
          path="/admin/users-table"
          element={<ProtectedRoute Component={UsersTablePage} />}
        />
        <Route
          path="/admin/user-info/:id"
          element={<ProtectedRoute Component={AdminUserInfoPage} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
