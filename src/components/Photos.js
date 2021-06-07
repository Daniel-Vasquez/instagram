import React from "react";

function Photos({ photos }) {
  return (
    <section>
      {photos.map((photo, index) => (
        <img key={photo} src={photo} alt={`Foto ${index}`} />
      ))}
    </section>
  );
}

export default Photos;
