import React from "react";
import { Link } from "react-router-dom";
import configuration from "../img/configuracion.png";
import danPerfil from "../img/danPerfil.png";
import ModalPerfil from "../components/ModalPerfil";
import danLogo from "../img/danPerfil.png";
import corazon from "../img/corazon.png";
import comentario from "../img/comentario.png";
import "../components/styles/Perfil.css";

class Perfil extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadign: false,
      error: null,
      modalIsOpen: false,
      images: [],
    };
  }

  getRandomArbitrary = (min, max)=> {
    return Math.random() * (max - min) + min;
  }

  handleOpenModal = () => {
    const { modalIsOpen } = this.state;

    this.setState({ modalIsOpen: !modalIsOpen });
  };

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  componentDidMount() {
    this.setState({loadign: true, error: null})
    fetch(`https://dog.ceo/api/breed/hound/images/random/${this.getRandomArbitrary(7, 15)}`)
      .then((res) => res.json())
      .then((json) => this.setState({ images: json.message }))
      .finally((error) => this.setState({ loading: false, error: error }));
  }

  render() {
    const { images } = this.state;

    return (
      <React.Fragment>
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
                <div className="PerfilInfo-nameAndButtons">
                  <p className="PerfilInfo-nameAndButtons__name">Daniel_Vas</p>
                  <button className="PerfilInfo-nameAndButtons__edit">
                    Editar perfil
                  </button>
                  <button
                    className="PerfilInfo-nameAndButtons__ajustes"
                    onClick={this.handleOpenModal}
                  >
                    <img src={configuration} alt="Ajustes" />
                  </button>
                  <ModalPerfil
                    isOpen={this.state.modalIsOpen}
                    onClose={this.handleCloseModal}
                  />
                </div>
                <div className="PerfilInfo-followers">
                  <span>
                    <strong>{images.length}</strong> Publicaciones
                  </span>
                  <Link to="/">
                    <strong>26</strong> seguidores
                  </Link>
                  <Link to="/">
                    <strong>49</strong> seguidos
                  </Link>
                </div>
                <div className="PerfilInfo-name">
                  <h1>Daniel</h1>
                  <p>Descripción...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="containerImages">
            {images.map((image, index) => (
              <React.Fragment key={index}>
                <div className="containerImages-container">
                  <img
                    className="containerImages-container__img"
                    src={image}
                    alt={image}
                  />
                  <div className="containerImages-container__icons">
                    <img src={corazon} alt="" />
                    <img src={comentario} alt="" />
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
        <div className="Home-container__displayNone">
          <Link className="displayNone__home" to="/"></Link>
          <Link className="displayNone__search" to="/perfil"></Link>
          <Link className="displayNone__more" to="/perfil"></Link>
          <Link className="displayNone__heart" to="/perfil"></Link>
          <Link className="displayNone__perfil" to="/perfil">
            <img src={danLogo} alt="Imagen perfil" />
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Perfil;
