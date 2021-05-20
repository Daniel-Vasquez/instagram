import React from "react";
import Carrusel from "../components/Carrusel.js";
import "../components/styles/Home.css";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-container">
        <div className="Home-container__left">
          <Carrusel />
          <Hero />
        </div>
        <div className="Home-container__right">
          <h1>Soy componente chiquito</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
