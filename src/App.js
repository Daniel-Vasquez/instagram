import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LayoutNavbar from "./components/LayoutNavber";
import Home from "./pages/Home.js";
import Perfil from "./pages/Perfil.js";

function App() {
  return (
    <BrowserRouter>
      <LayoutNavbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/perfil" component={Perfil} />
        </Switch>
      </LayoutNavbar>
    </BrowserRouter>
  );
}

export default App;
