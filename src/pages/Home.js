import React from "react";
import { Link } from "react-router-dom";
import Carrusel from "../components/Carrusel";
import "../components/styles/Home.css";
import Hero from "../components/Hero";
import { getRickAndMortyCharacters } from "../utils/api";
import Perfiles from "../components/Perfiles";
import danLogo from "../img/danPerfil.png";
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = (params = {}) => {
    this.setState({ loading: true, error: null });

    getRickAndMortyCharacters(params)
      .then((response) => this.setState({ data: response.results }))
      .catch((error) => this.setState({ error: error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    return (
      <div>
        <div className="Home">
          <div className="Home-container">
            <div className="Home-container__left">
              <Carrusel data={this.state.data} />
              <Hero data={this.state.data} />
            </div>
            <div className="Home-container__right">
              <Perfiles data={this.state.data} />
            </div>
          </div>
        </div>
        <div className="Home-container__displayNone">
          <Link className="displayNone__home" to="/perfil"></Link>
          <Link className="displayNone__search" to="/perfil"></Link>
          <Link className="displayNone__more" to="/perfil"></Link>
          <Link className="displayNone__heart" to="/perfil"></Link>
          <Link className="displayNone__perfil" to="/perfil">
            <img src={danLogo} alt="Imagen perfil" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
