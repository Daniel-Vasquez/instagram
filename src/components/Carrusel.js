import React from "react";
import { Link } from "react-router-dom";
import "./styles/Carrusel.css";

function Carrusel(props) {
  return (
    <section className="carousel">
      <div className="carousel__container">
        {props.characters.map((character) => {
          return (
            <Link
              to={`/perfil/characters/${character.id}`}
              id={character.id}
              key={character.id}
              className="carousel-item"
            >
              <img
                className="carousel-item__img"
                src={character.image}
                alt=""
              />
              <p className="carousel-item__description">{character.name}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Carrusel;
