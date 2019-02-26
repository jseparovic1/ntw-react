import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      whislistProducts: []
    };
  }

  componentDidMount() {
    fetch("./products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data
        });
      });
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="row">
            <div class="col-8">
              <ProductList products={this.state.products} />
            </div>
            <div className="col-4">
              <h1>Favoriti!</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
