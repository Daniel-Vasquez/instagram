import React from "react";
import { Link } from "react-router-dom";
// import { getRickAndMortyCharacters } from "../utils/api";
import "./styles/Carrusel.css";
// class Carrusel extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loading: true,
//       error: null,
//       data: [],
//     };
//   }

//   render() {
//     return (
//       <section className="carousel">
//         <div className="carousel__container">
//           {this.props.data.map((data) => {
//             return (
//               <div id={data.id} key={data.id} className="carousel-item">
//                 <img className="carousel-item__img" src={data.image} alt="" />
//                 <p className="carousel-item__description">{data.name}</p>
//               </div>
//             );
//           })}
//         </div>
//       </section>
//     );
//   }
// }

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
