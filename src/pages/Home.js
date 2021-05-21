import React from "react";
import Carrusel from "../components/Carrusel";
import "../components/styles/Home.css";
import Hero from "../components/Hero";
import { getRickAndMortyCharacters } from "../utils/api";
import Perfiles from "../components/Perfiles";

// const Home = () => {
//   return (
//     <div className="Home">
//       <div className="Home-container">
//         <div className="Home-container__left">
//           <Carrusel />
//           <Hero />
//         </div>
//         <div className="Home-container__right">
//           <h1>Soy componente chiquito</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

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
    );
  }
}

export default Home;
