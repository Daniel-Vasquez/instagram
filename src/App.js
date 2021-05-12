import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LayoutNavbar from "./components/LayoutNavber";
import Home from "./pages/Home.js";
import Carrusel from "./components/Carrusel.js";

function App() {
  return (
    <BrowserRouter>
      <LayoutNavbar>
        <Home />
        <Carrusel />
      </LayoutNavbar>
    </BrowserRouter>
  );
}

export default App;
