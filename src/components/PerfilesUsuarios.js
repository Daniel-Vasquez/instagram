import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./styles/PerfilesUsuarios.css";

function PerfilesUsuarios(props) {
  return (
    <BrowserRouter>
      <div className="PerfilesUsuarios-personal">
        <div className="PerfilesUsuarios-personal__imgAndName">
          <Link to="/perfil">
            <img src={props.image} alt="Foto perfil" />
          </Link>
          <Link to="/perfil">{props.name}</Link>
        </div>
        <div className="PerfilesUsuarios-personal__button">
          <button onClick={() => alert("Seguir")}>Seguir</button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default PerfilesUsuarios;
