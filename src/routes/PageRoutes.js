import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"}/>} />
        <Route path="/signup" element={"Signup"} />
        <Route path="/login" element={"Login"} />
        <Route path="/password/request" element={"forgot password"} />
        <Route path="/password/reset/:token" element={"reset password"} />
        <Route path="/dashboard" element={"dashboard"} />
        <Route path="/expenses" element={"expenses"} />
        <Route path="/budget" element={"budget planning"} />
        <Route path="/goals" element={"goals"} />
        <Route path="/accounts" element={"sccounts"} />
        <Route path="/analysis" element={"analysis"} />
        <Route path="/profile" element={"profile and settings"} />
        <Route path="*" element={"404"} />
      </Routes>
    </Router>
  )
}

export default PageRoutes