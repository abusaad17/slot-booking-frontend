import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
// import MovieSelector from "./components/MovieSelector"
import LoginPage from "./components/LoginPage";
import SeatAvailability from "./components/SeatAvailability";
import SeatMatrix from "./components/SeatMatrix";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./privateRoute";
// import GithubLogo from './components/GithubLogo'

const App = () => {
  return (
    <div className="">
      {/* <GithubLogo /> */}
      {/* <MovieSelector /> */}
      {/* <LoginPage /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
