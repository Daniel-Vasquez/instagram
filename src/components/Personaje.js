import React from "react";
import { Link } from "react-router-dom";
import { getCharacter, getRandomDogs } from "../utils/api";
import Photos from "./Photos";

import "./styles/Personaje.css";

class Personaje extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: {
        info: null,
        loading: false,
        error: false,
      },

      photos: {
        photos: [],
        loading: false,
        error: false,
      },
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.getCharacter(id);
    this.getDogs();
  }

  getCharacter(id) {
    const stateCharacter = this.state.character;

    this.setState({ character: { ...stateCharacter, loading: true } });
    getCharacter(id)
      .then((character) =>
        this.setState({ character: { ...stateCharacter, character } })
      )
      .catch((error) =>
        this.setState({
          character: { ...stateCharacter, error: error.message },
        })
      )
      .finally(() =>
        this.setState({
          character: { ...this.state.character, loading: false },
        })
      );
  }

  getDogs(count) {
    const statePhotos = this.state.photos;

    this.setState({ photos: { ...statePhotos, loading: true } });
    getRandomDogs(count)
      .then((response) => {
        this.setState({ photos: { ...statePhotos, photos: response.message } });
      })
      .catch((error) =>
        this.setState({
          photos: { ...statePhotos, error: error.message },
        })
      )
      .finally(() =>
        this.setState({
          photos: { ...this.state.photos, loading: false },
        })
      );
  }

  render() {
    const { character, loading, error } = this.state.character;
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
      <div>
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
        {this.state.photos.loading && <p>Cargando fotos...</p>}
        {this.state.photos.error && <p>Ups, error al pedir tus fotos...</p>}
        <Photos photos={this.state.photos.photos} />
      </div>
    );
  }
}

export default Personaje;
