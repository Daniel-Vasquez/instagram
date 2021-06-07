import React from "react";
import { Link } from "react-router-dom";
import { getCharacter, getRandomDogs } from "../utils/api";

import "./styles/Personaje.css";

class Personaje extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: null,
      loading: false,
      error: false,
      // character: {
      //   info: null,
      //   loading: false,
      //   error: false
      // },

      // photos: {
      //   photos: [],
      //   loading: false,
      //   error: false
      // }
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.setState({ loading: true });
    getCharacter(id)
      .then((character) => {
        console.log({ character });
        this.setState({ character });
      })
      .catch((error) => {
        console.log(typeof error);
        this.setState({ error: error.message });
      })
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { character, loading, error } = this.state;
    if (loading) {
      return <p>Cargando, jeje...</p>;
    }

    if (error) {
      return <p>Ups!! {error}</p>;
    }

    if (!character) {
      return <p>Sin personaje</p>;
    }

    return (
      <div className="HomePersonajes">
        <div className="HomePersonajes-container">
          <div className="HomePersonajes-container__img">
            <img src={character.image} alt="Foto perfil" />
          </div>
          <div className="HomePersonajes-container__info">
            <div className="info-nameAndButtons">
              <p className="info-nameAndButtons__name">{character.name}</p>
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
