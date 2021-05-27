import React from "react";
import sitioEnConst from "../img/SITIO-EN-CONSTRUCCION.jpg";

function sectionOutstanding() {
  return (
    <div className="sectionMessage">
      <div className="containerMessage">
        <h2>
          Contenido destacado. <br /> Ve fotos y vídeos de tus amigos o grupos.
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

export default sectionOutstanding;
