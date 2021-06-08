import React from "react";
import { Link } from "react-router-dom";
import PerfilesUsuarios from "./PerfilesUsuarios";
import DanPerfil from "../img/danPerfil.png";
import "./styles/Perfiles.css";

function Perfiles() {
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
          <PerfilesUsuarios
            name="memesDePerritosGordos"
            image="https://thumbs.dreamstime.com/b/barro-amasado-del-perro-en-un-fondo-amarillo-134348501.jpg"
          />
          <PerfilesUsuarios
            name="fotos.isa11"
            image="https://lamenteesmaravillosa.com/wp-content/uploads/2018/09/hombre-creido-pensando-que-sabe.jpg"
          />
          <PerfilesUsuarios
            name="paisaje 4k"
            image="https://image.winudf.com/v2/image1/bGl0dGxlYXBwYXMubGFuZHNjYXBlLndhbGxwYXBlcnNfc2NyZWVuXzhfMTU2NzI4NDI5NV8wMTA/screen-8.jpg?fakeurl=1&type=.jpg"
          />
          <PerfilesUsuarios
            name="fondos"
            image="https://hanieltech.com/wp-content/uploads/2020/04/pack-de-wallpapers-4k.jpg"
          />
          <PerfilesUsuarios
            name="Lo más cool"
            image="https://yt3.ggpht.com/ytc/AAUvwnhXNIq7_PKJbwGCkKu42JdsI8zevH3-lbwADK3z=s900-c-k-c0x00ffffff-no-rj"
          />
        </div>
        <div className="perfiles-personal__message">
          <Link to="/">Información</Link>.<Link to="/">Ayuda</Link>.
          <Link to="/">Prensa</Link>.<Link to="/">API</Link>.
          <Link to="/">Empleo</Link>.<Link to="/">Privacidad</Link>.
          <Link to="/">Condiciones</Link>.<Link to="/">Ubicaciones</Link>
          <Link to="/">Cuentas</Link>.<Link to="/">destacadas</Link>.
          <Link to="/">Hashtags</Link>.<Link to="/">Idioma</Link>
          <p className="perfiles-personal__author">
            ©2021 Created by Daniel Vásquez
          </p>
        </div>
      </div>
    </section>
  );
}

export default Perfiles;
