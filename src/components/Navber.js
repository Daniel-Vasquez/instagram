import React from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";
import logoInsta from "../img/logo-Insta.png";

import Modal from "./Modal";

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
    };
  }

  handleOpenModal = () => {
    const { modalIsOpen } = this.state;

    this.setState({ modalIsOpen: !modalIsOpen });
  };

  handleCloseModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <header>
        <div className="container">
          <div className="container_img">
            <a href="/">
              <img
                className="container-img__logo"
                src={logoInsta}
                alt="Logo de instagram"
              />
            </a>
          </div>
          <section className="main_input">
            <div className="main_input_container">
              <span className="search_icon"></span>
              <input type="text" placeholder="Buscar" />
            </div>
          </section>
          <section className="main_icons">
            <Link className="main_icons__home" to="/"></Link>
            <Link className="main_icons__message" to="/maintenance"></Link>
            <Link className="main_icons__compass" to="/maintenance"></Link>
            <Link className="main_icons__heart" to="/maintenance"></Link>
            <div
              className="main_icons__container"
              style={{
                border: !this.state.modalIsOpen ? "none" : "1px solid #282828",
              }}
            >
              <button
                onClick={this.handleOpenModal}
                className="main_icons__me"
              ></button>
            </div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onClose={this.handleCloseModal}
            />
          </section>
        </div>
      </header>
    );
  }
}

export default Navbar;
