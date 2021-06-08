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
      <React.Fragment>
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
          <Link className="displayNone__home" to="/"></Link>
          <Link className="displayNone__search" to="/message"></Link>
          <Link className="displayNone__more" to="/outstanding"></Link>
          <Link className="displayNone__heart" to="/perfil"></Link>
          <Link className="displayNone__perfil" to="/perfil">
            <img src={danLogo} alt="Imagen perfil" />
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
