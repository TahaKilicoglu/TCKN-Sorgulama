import React from "react";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar text-bg-warning fw-semibold">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="..."
            style={{  height: "45px", width: "45px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Anasayfa
            </a>
            <a className="nav-link" href="/about">
              Hakkımızda
            </a>
            <a className="nav-link" href="/contact">
              İletişim
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
