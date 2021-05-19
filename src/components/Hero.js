import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/Hero.css";

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <section className="Hero">
        <section className="Hero-imgTitleButton">
          <div className="Hero-left">
            <img
              className="Hero-imgTitle__img"
              src="https://images-na.ssl-images-amazon.com/images/I/81574TYrrxL._AC_SX466_.jpg"
              alt="Logo"
            />
            <Link to="./">AttackOnTitanLastSeason</Link>
          </div>
          <div className="Hero-right">
            <Link to="./">...</Link>
          </div>
        </section>
        <section className="Hero-img">
          <img
            src="https://wallpapercave.com/wp/wp8190839.jpg"
            alt="Img de noticia"
          />
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
        <section className="Hero-commentaryBox">hola</section>
      </section>
    );
  }
}

export default Hero;
