import React from "react";
import sitioEnConst from "../img/SITIO-EN-CONSTRUCCION.jpg";
import "./styles/sectionMessage.css";

function sectionMessage() {
  return (
    <div className="sectionMessage">
      <div className="containerMessage">
        <h2>
          Tus mensajes. <br /> Envía fotos y mensajes privados a un amigo o
          grupo.
        </h2>
        <img
          className="sectionMessage-img"
          src={sitioEnConst}
          alt="Sitio en construcción"
        />
      </div>
    </div>
  );
}

export default sectionMessage;
