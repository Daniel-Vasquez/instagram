import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutNavbar from "./components/LayoutNavber";
import Home from "./pages/Home.js";
import Perfil from "./pages/Perfil.js";
import Personaje from "./components/Personaje";

function App() {
  return (
    <BrowserRouter>
      <LayoutNavbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/perfil" component={Perfil} />
          <Route exact path="/perfil/characters/:id" component={Personaje} />
        </Switch>
      </LayoutNavbar>
    </BrowserRouter>
  );
}

export default App;
