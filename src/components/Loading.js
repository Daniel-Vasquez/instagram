import React from "react";
import "./styles/Loading.css";

function Loading() {
  return (
    <div className="containerLoading">
      <div className="lds-grid">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loading;
