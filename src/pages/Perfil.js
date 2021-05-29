import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/Perfil.css";
import configuration from "../img/configuracion.png";
import danPerfil from "../img/danPerfil.png";
import ModalPerfil from "../components/ModalPerfil";

class Perfil extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };
  }

  handleOpenModal = () => {
    const { modalIsOpen } = this.state;

    this.setState({ modalIsOpen: !modalIsOpen });
  };

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div>
        <section>
          <div className="Perfil">
            <div className="Perfil-container">
              <button
                className="Perfil-container__img"
                onClick={() => alert("Foto perfil")}
              >
                <img src={danPerfil} alt="Foto perfil" />
              </button>
              <div className="Perfil-container__info">
                <div className="info-nameAndButtons">
                  <p className="info-nameAndButtons__name">Daniel_Vas</p>
                  <button
                    className="info-nameAndButtons__edit"
                    onClick={() => alert("Editar")}
                  >
                    Editar perfil
                  </button>
                  <button
                    className="info-nameAndButtons__ajustes"
                    onClick={this.handleOpenModal}
                  >
                    <img src={configuration} alt="Ajustes" />
                  </button>
                  <ModalPerfil
                    isOpen={this.state.modalIsOpen}
                    onClose={this.handleCloseModal}
                  />
                </div>
                <div className="info-followers">
                  <span>
                    <strong>4</strong> Publicaciones
                  </span>
                  <Link to="/">
                    <strong>26</strong> seguidores
                  </Link>
                  <Link to="/">
                    <strong>49</strong> seguidos
                  </Link>
                </div>
                <div className="info-name">
                  <h1>Daniel</h1>
                  <p>Descripción...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="containerPerfil">
            <h1>Estas en Perfil</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            tenetur maxime, quia debitis voluptates aspernatur porro accusantium
            dignissimos enim, sed voluptatum, sint placeat praesentium harum
            ipsa et a cumque beatae.
            <p></p>
          </div>
        </section>
      </div>
    );
  }
}

export default Perfil;
