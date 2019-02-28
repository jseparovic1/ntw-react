import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="text-muted bg-dark p-4">
        <div className="container ">
          <p className="float-right">
            <a href="/">Back to top</a>
          </p>
          <p>
            We ship over 45 million products around the world!
          </p>
          <p>
            <a href="/">Visit the homepage</a> or read
            our <a href="/">getting started guide</a>.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
