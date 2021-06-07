import React from "react";
import "./styles/Error.css";

function Error(props) {
  return (
    <div className="containerError">
      <img
        src="https://mrwanker.com/wp-content/uploads/2021/03/meme-no-puede-ser-480x425.jpg"
        alt="Error al cargar"
      />
      <h3>{props.message}</h3>
    </div>
  );
}

export default Error;
