import React from "react";
import { Link } from "react-router-dom";
import logoInsta from "../img/logo-Insta.png";

import danPerfil from "../img/danPerfil.png";
import save from "../img/save.png";
import settings from "../img/settings.png";
import switchAccount from "../img/switchAccount.png";
import "./styles/Navbar.css";

const Navber = () => {
  return (
    <header>
        <div className="container">
          <div className="container_img">
            <Link to="/">
              <img
                className="container-img__logo"
                src={logoInsta}
                alt="Logo de instagram"
              />
            </Link>
          </div>
          <section className="main_input">
            <div className="main_input_container">
              <span className="search_icon"></span>
              <input type="text" placeholder="Buscar" />
            </div>
          </section>
          <section className="main_icons">
            <Link className="main_icons__home" to="/"></Link>
            <Link className="main_icons__message" to="/message"></Link>
            <Link className="main_icons__compass" to="/outstanding"></Link>
            <button className="main_icons__heart" >
              <div className="main_icons-heart__containerHover">
                <h1>En construcción.</h1>
              </div>
            </button>

            <button  className="main_icons__container .main_icons__me">
              <div className="container-Modal ">
                <div className="container-Modal__perfil">
                  <Link to="/perfil">
                    <img src={danPerfil} alt="Imagen de perfil" />
                    <p>Perfil</p>
                  </Link>
                </div>
                <div className="container-Modal__save">
                  <Link to="/perfil">
                    <img src={save} alt="Imagen de perfil" />
                    <p>Guardados</p>
                  </Link>
                </div>
                <div className="container-Modal__configuration">
                  <Link to="/perfil">
                    <img src={settings} alt="Imagen de perfil" />
                    <p>Configuración</p>
                  </Link>
                </div>
                <div className="container-Modal__switch">
                  <Link to="/perfil">
                    <img src={switchAccount} alt="Imagen de perfil" />
                    <p>Cambiar de cuenta</p>
                  </Link>
                </div>
                <div className="container-Modal__closeSession">
                  <Link to="/">
                    <p>Cerrar sesión</p>
                  </Link>
                </div>
              </div>
            </button>
          </section>
        </div>
      </header>
  )
}

export default Navber