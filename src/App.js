import React from "react"
import "./App.css"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// COMPONENTS
import CarouselPage from "./components/dashboard/Carousel";
import Header from "./components/dashboard/Header"
import RouterBack from "./components/RouterBack"
import AccountPage from './components/account/AccountPage'
import LoginPage from "./components/login/LoginPage";
// import Loading from "./components/Loading";



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {
          <>
            <LoginPage />
          </>
        } />

        <Route path='/dashboard' element= {
          <>
            <Header />
            <CarouselPage />
          </>
        } />

        <Route path="/account" element= {
          <>
            <AccountPage /> 
          </>
        } />

        <Route path="/leaderboard" element= {
          <>
            <RouterBack />
          </>
        } />
      </Routes>
    </Router>
    
  )
}

export default App;