import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./styles/Modal.css";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="container-Modal">
      <div className="container-Modal__perfil">
        <Link to="/perfil">
          <span className="perfil__img"></span>
          <p>Perfil</p>
        </Link>
      </div>
      <div className="container-Modal__save">Guardados</div>
      <div className="container-Modal__configuration">Configuración</div>
      <div className="container-Modal__switch">Cambiar de cuenta</div>
      <div className="container-Modal__closeSession">Cerrar sesión</div>
    </div>,
    document.getElementById("modalPerfil")
  );
}

export default Modal;
