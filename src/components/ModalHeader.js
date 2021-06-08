import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import danPerfil from "../img/danPerfil.png";
import save from "../img/save.png";
import settings from "../img/settings.png";
import switchAccount from "../img/switchAccount.png";
import "./styles/Modal.css";

function ModalHeader(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="container-Modal">
      <div className="container-Modal__perfil">
        <Link onClick={props.onClose} to="/perfil">
          <img src={danPerfil} alt="Imagen de perfil" />
          <p>Perfil</p>
        </Link>
      </div>
      <div className="container-Modal__save">
        <Link onClick={props.onClose} to="/perfil">
          <img src={save} alt="Imagen de perfil" />
          <p>Guardados</p>
        </Link>
      </div>
      <div className="container-Modal__configuration">
        <Link onClick={props.onClose} to="/perfil">
          <img src={settings} alt="Imagen de perfil" />
          <p>Configuración</p>
        </Link>
      </div>
      <div className="container-Modal__switch">
        <Link onClick={props.onClose} to="/perfil">
          <img src={switchAccount} alt="Imagen de perfil" />
          <p>Cambiar de cuenta</p>
        </Link>
      </div>
      <div className="container-Modal__closeSession">
        <Link onClick={props.onClose} to="/perfil">
          <p>Cerrar sesión</p>
        </Link>
      </div>
    </div>,
    document.getElementById("modalHeader")
  );
}

export default ModalHeader;
