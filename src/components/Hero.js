import React from "react";
import { Link } from "react-router-dom";
// import { getRickAndMortyCharacters } from "../utils/api";

import "../components/styles/Hero.css";
import Icon from "../img/happy.png";

// class Hero extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: true,
//       error: null,
//       data: [],
//     };
//   }

//   render() {
//     return this.props.data.map((data) => {
//       return (
//         <section key={data.id} className="Hero">
//           <section className="Hero-imgTitleButton">
//             <div className="Hero-left">
//               <img className="Hero-imgTitle__img" src={data.image} alt="Logo" />
//               <Link to="./">{data.name}</Link>
//             </div>
//             <div className="Hero-right">
//               <button
//                 className="Hero-right__button"
//                 onClick={() => alert("AttackOnTitanLastSeason")}
//               >
//                 ...
//               </button>
//             </div>
//           </section>
//           <section className="Hero-img">
//             <img src={data.image} alt="Img de noticia" />
//           </section>
//           <section className="Hero-icons">
//             <div className="Hero-icons__left">
//               <button
//                 className="Hero-icons__heart"
//                 onClick={() => alert("Heart")}
//               ></button>
//               <button
//                 className="Hero-icons__commentary"
//                 onClick={() => alert("Commentary")}
//               ></button>
//               <button
//                 className="Hero-icons__send"
//                 onClick={() => alert("send")}
//               ></button>
//             </div>
//             <div className="Hero-icons__right">
//               <button
//                 className="Hero-icons__save"
//                 onClick={() => alert("Save")}
//               ></button>
//             </div>
//           </section>
//           <section className="Hero-text">
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
//               tempore corporis sapiente nemo nihil amet ipsam necessitatibus,
//               temporibus exercitationem culpa neque eaque inventore omnis libero
//               iste sed deleniti est modi.
//             </p>
//           </section>
//           <section className="Hero-commentaryBox">
//             <button
//               className="Hero-commentaryBox__icon"
//               onClick={() => alert("Iconos")}
//             >
//               <img src={Icon} alt="Icon" />
//             </button>
//             <input
//               className="Hero-commentaryBox__input"
//               type="text"
//               placeholder="Añadir un comentario..."
//             />
//             <button
//               className="Hero-commentaryBox__button"
//               onClick={() => alert("Publicar")}
//             >
//               Publicar
//             </button>
//           </section>
//         </section>
//       );
//     });
//   }
// }

function Hero(props) {
  return props.data.map((data) => {
    return (
      <section key={data.id} className="Hero">
        <section className="Hero-imgTitleButton">
          <div className="Hero-left">
            <img className="Hero-imgTitle__img" src={data.image} alt="Logo" />
            <Link to="./">{data.name}</Link>
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
          <img src={data.image} alt="Img de noticia" />
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
