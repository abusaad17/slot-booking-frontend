import React, { useState } from "react"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
// import MovieSelector from "./components/MovieSelector"
import LoginPage from "./components/LoginPage"
import SeatAvailability from "./components/SeatAvailability"
import SeatMatrix from "./components/SeatMatrix"
import PriceCalculator from "./components/PriceCalculator"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./components/Dashboard";
// import GithubLogo from './components/GithubLogo'

// import MovieContext from './contexts/MovieContext'

const App = () => {

  // const [movies, EditMovies] = useState({
  //   movieNames: {
  //     "Bloodshot": 10,
  //     "The girl on the Train": 8,
  //     "The invisible Man": 11,
  //     "Onward": 12,
  //     "My Spy": 9
  //   },
  //   moviePrice: 10,
  //   totalSeats: 0,
  //   seatNumbers: []
  // })

  return (
    <div className="">
      {/* <MovieContext.Provider value={{ movies, changeState: EditMovies }}> */}
      {/* <GithubLogo /> */}
      {/* <MovieSelector /> */}
      {/* <LoginPage /> */}
      {/* <SeatMatrix />
      <SeatAvailability />
      <PriceCalculator /> */}
      {/* </MovieContext.Provider> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      
      </BrowserRouter>
  <ToastContainer/>
    </div>
  )
}

export default App
