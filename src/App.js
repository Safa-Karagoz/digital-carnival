import React from "react"
import Header from "./components/Header"
import "./App.css"
import GameButton from "./components/GameButton";
import CarouselPage from "./components/Carousel";

function App() {
  return (
    <div className="container">
        <Header />
        {/* <GameButton text={"Strong Man"}/>
        <GameButton text={"Skeeball"}/>
        <GameButton text={"Just Dance"}/> */}

        <CarouselPage />

    </div>
  )
}

export default App;