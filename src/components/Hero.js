import React from "react";
import { Link } from "react-router-dom";
import Icon from "../img/happy.png";
import "../components/styles/Hero.css";

function Hero(props) {
  return props.characters.map((character) => {
    return (
      <section key={character.id} className="Hero">
        <section className="Hero-imgTitleButton">
          <div className="Hero-left">
            <Link
              className="Hero-left__link"
              to={`/perfil/characters/${character.id}`}
            >
              <div className="Hero-left__container">
                <img
                  className="Hero-imgTitle__img"
                  src={character.image}
                  alt="Logo"
                />
                <p className="Hero-imgTitle__name">{character.name}</p>
              </div>
            </Link>
          </div>
          <div className="Hero-right">
            <button
              className="Hero-right__button"
              onClick={() => alert("AttackOnTitanLastSeason")}
            >
              ...
            </button>
          </div>
        </section>
        <section className="Hero-img">
          <img src={character.image} alt="Img de noticia" />
        </section>
        <section className="Hero-icons">
          <div className="Hero-icons__left">
            <button
              className="Hero-icons__heart"
              onClick={() => alert("Heart")}
            ></button>
            <button
              className="Hero-icons__commentary"
              onClick={() => alert("Commentary")}
            ></button>
            <button
              className="Hero-icons__send"
              onClick={() => alert("send")}
            ></button>
          </div>
          <div className="Hero-icons__right">
            <button
              className="Hero-icons__save"
              onClick={() => alert("Save")}
            ></button>
          </div>
        </section>
        <section className="Hero-text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            tempore corporis sapiente nemo nihil amet ipsam necessitatibus,
            temporibus exercitationem culpa neque eaque inventore omnis libero
            iste sed deleniti est modi.
          </p>
        </section>
        <section className="Hero-commentaryBox">
          <button
            className="Hero-commentaryBox__icon"
            onClick={() => alert("Iconos")}
          >
            <img src={Icon} alt="Icon" />
          </button>
          <input
            className="Hero-commentaryBox__input"
            type="text"
            placeholder="Añadir un comentario..."
          />
          <button
            className="Hero-commentaryBox__button"
            onClick={() => alert("Publicar")}
          >
            Publicar
          </button>
        </section>
      </section>
    );
  });
}

export default Hero;
