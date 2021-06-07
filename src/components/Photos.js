import React from "react";
import "./styles/Photos.css";

function Photos({ photos }) {
  return (
    <section className="containerPhotos">
      {photos.map((photo, index) => (
        <img key={photo} src={photo} alt={`Foto ${index}`} />
      ))}
    </section>
  );
}

export default Photos;
