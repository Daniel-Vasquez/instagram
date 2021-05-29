import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./styles/ModalPerfil.css";

function ModalPerfil(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fondoNegro">
      <div className="containerModalPerfil">
        <div className="containerModalPerfil-links">
          <Link to="./">Cambiar contraseña</Link>
          <Link to="./">Tarjeta de identificación</Link>
          <Link to="./">Aplicaciones y sitios web</Link>
          <Link to="./">Notificaciones</Link>
          <Link to="./">Privacidad y seguridad</Link>
          <Link to="./">Actividades de inicio de sesión</Link>
          <Link to="./">Correos electrónicos de Instargram</Link>
          <Link to="./">Información de un problema</Link>
          <Link to="./">Cerrar sesión</Link>
          <button onClick={props.onClose}>Cancelar</button>
        </div>
      </div>
    </div>,
    document.getElementById("modalPerfil")
  );
}

export default ModalPerfil;
