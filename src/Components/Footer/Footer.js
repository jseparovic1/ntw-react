import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer class="text-muted bg-dark p-4">
        <div class="container ">
          <p class="float-right">
            <a href="#">Back to top</a>
          </p>
          <p>
            We ship over 45 million products around the world!
          </p>
          <p>
            <a href="../../">Visit the homepage</a> or read
            our <a href="../../getting-started/">getting started guide</a>.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
