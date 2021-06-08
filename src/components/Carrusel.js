import React from "react";
import { Link } from "react-router-dom";

import "./styles/Carrusel.css";

function Carrusel(props) {
  return (
    <section className="carousel">
      <div className="carousel__container">
        {props.data.map((data) => {
          return (
            <Link
              to={`/perfil/characters/${data.id}`}
              id={data.id}
              key={data.id}
              className="carousel-item"
              data={props.data}
            >
              <img className="carousel-item__img" src={data.image} alt="" />
              <p className="carousel-item__description">{data.name}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Carrusel;
