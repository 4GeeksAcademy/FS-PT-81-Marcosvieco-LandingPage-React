import React from "react";

export const Navbar = () => {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
  <a className="navbar-brand" href="#"><strong>Start Bootstrap</strong></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <a className="nav-item nav-link active" href="#"><strong>Home</strong></a>
        <a className="nav-item nav-link" href="#"><strong>About</strong></a>
        <a className="nav-item nav-link" href="#"><strong>Services</strong></a>
        <a className="nav-item nav-link" href="#"><strong>Contact</strong></a>
      </div>
  </div>
</nav>
        )
}