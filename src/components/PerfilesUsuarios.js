import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import DanPerfil from "../img/danPerfil.png";
import "./styles/PerfilesUsuarios.css";

function PerfilesUsuarios() {
  return (
    <BrowserRouter>
      <div className="PerfilesUsuarios-personal">
        <div className="PerfilesUsuarios-personal__imgAndName">
          <Link to="/perfil">
            <img src={DanPerfil} alt="Foto perfil" />
          </Link>
          <Link to="/perfil">daniel_Vas</Link>
        </div>
        <div className="PerfilesUsuarios-personal__button">
          <button onClick={() => alert("Seguir")}>Seguir</button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default PerfilesUsuarios;
