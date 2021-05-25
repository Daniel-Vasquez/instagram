import React from "react";
import { Link } from "react-router-dom";
import "./styles/Personaje.css";

class Personaje extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div className="HomePersonajes">
        <div className="HomePersonajes-container">
          <div className="HomePersonajes-container__img">
            <img src="" alt="Foto perfil" />
          </div>
          <div className="HomePersonajes-container__info">
            <div className="info-nameAndButtons">
              <p className="info-nameAndButtons__name">
                {this.state.data.name}
              </p>
              <button
                className="info-nameAndButtons__follow"
                onClick={() => alert("Seguir")}
              >
                Seguir
              </button>
              <button
                className="info-nameAndButtons__more"
                onClick={() => alert("More")}
              >
                ·
              </button>
              <button
                className="info-nameAndButtons__options"
                onClick={() => alert("Options")}
              >
                ...
              </button>
            </div>
            <div className="info-followers">
              <span>
                <strong>4</strong> Publicaciones
              </span>
              <Link to="/">
                <strong>256</strong> seguidores
              </Link>
              <Link to="/">
                <strong>498</strong> seguidos
              </Link>
            </div>
            <div className="info-name">
              <h1>Daniel</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Personaje;
