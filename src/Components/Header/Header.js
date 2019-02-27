import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="/" className="navbar-brand d-flex align-items-center">
              <strong>Amazon</strong>
            </a>
            <form className="form-inline mt-2 mt-md-0">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) => this.props.productSearchHandler(event.target.value)}
              />
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
