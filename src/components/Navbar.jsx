import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false, // Estado para controlar si el menú está abierto
    };
  }

  // Función para alternar el estado del menú
  toggleNav = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div
            className={`navbar-links ${this.state.isNavOpen ? "active" : ""}`}
          >
            <ul>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/">Noticias</a>
              </li>
              <li>
                <a href="/">Acerca de</a>
              </li>
              <li>
                <a href="/">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="navbar-toggle" onClick={this.toggleNav}>
            <i
              className={this.state.isNavOpen ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
