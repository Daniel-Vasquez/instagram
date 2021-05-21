import React from "react";
import { Link } from "react-router-dom";
import "./styles/Perfiles.css";
import DanPerfil from "../img/danPerfil.png";

import PerfilesUsuarios from "./PerfilesUsuarios";

function Perfiles(props) {
  return (
    <section className="container-perfiles">
      <div className="perfiles">
        <div className="perfiles-personal">
          <div className="perfiles-personal__imgAndName">
            <Link to="/perfil">
              <img src={DanPerfil} alt="Foto perfil" />
            </Link>
            <Link to="/perfil">daniel_Vas</Link>
          </div>
          <div className="perfiles-personal__button">
            <button onClick={() => alert("Cambiar")}>Cambiar</button>
          </div>
        </div>
        <div className="perfiles-personal__sugerencias">
          <p>Sugerencias para ti</p>
          <Link to="/perfil">Ver todo</Link>
        </div>
        <div className="perfiles-personal__usuarios">
          <PerfilesUsuarios />
          <PerfilesUsuarios />
          <PerfilesUsuarios />
          <PerfilesUsuarios />
          <PerfilesUsuarios />
        </div>
        <div className="perfiles-personal__message">
          <Link to="/">Información</Link>
          <Link to="/">Ayuda</Link>
          <Link to="/">Prensa</Link>
          <Link to="/">API</Link>
          <Link to="/">Empleo</Link>
          <Link to="/">Privacidad</Link>
          <Link to="/">Condiciones</Link>
          <Link to="/">Ubicaciones</Link>
          <Link to="/">Cuentas</Link>
          <Link to="/">destacadas</Link>
          <Link to="/">Hashtags</Link>
          <Link to="/">Idioma</Link>
          <p>©2021 INSTAGRAM FROM FACEBOOK</p>
        </div>
      </div>
    </section>
  );
}

export default Perfiles;
