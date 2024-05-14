import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ResetPassword from "../pages/Auth/ResetPassword";
import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import Budget from "../pages/Budget";
import Profile from "../pages/Profile";
import Navigation from "../components/Navigation";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/request" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/" element={<Navigation />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="budget" element={<Budget />} />
          {/* <Route path="/goals" element={"goals"} /> */}
          {/* <Route path="/accounts" element={"sccounts"} /> */}
          {/* <Route path="/analysis" element={"analysis"} /> */}
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={"404"} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
