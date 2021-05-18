import React from "react";
import Carrusel from "../components/Carrusel.js";
import "../components/styles/Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-container">
        <Carrusel />
        <h1>Soy componente chiquito</h1>
      </div>
    </div>
  );
};

export default Home;
