import React from "react";
import "./styles/Carrusel.css";
class Carrusel extends React.Component {
  constructor(props) {
    super();

    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await fetch("https://rickandmortyapi.com/api/character/");
      const response = await data.json();

      console.log(response.results);
      this.setState({ loading: false, data: response.results });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <section className="carousel">
        <div className="carousel__container">
          {/* {this.state.data.map((data) => {
            return (
              <div className="carousel-item">
                <img
                  className="carousel-item__img"
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                  alt=""
                />
                <p className="carousel-item__description">{data.name}</p>
              </div>
            );
          })} */}
          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt=""
            />
            <p className="carousel-item__description">Hola</p>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt=""
            />
            <p className="carousel-item__description">Hola</p>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt=""
            />
            <p className="carousel-item__description">Hola</p>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt=""
            />
            <p className="carousel-item__description">Hola</p>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt=""
            />
            <p className="carousel-item__description">Hola</p>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt=""
            />
            <p className="carousel-item__description">Hola</p>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt=""
            />
            <p className="carousel-item__description">Hola</p>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt=""
            />
            <p className="carousel-item__description">Hola</p>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt=""
            />
            <p className="carousel-item__description">Hola</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Carrusel;
