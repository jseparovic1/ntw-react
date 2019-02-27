import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Details from "./Pages/Details";

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      whislist: []
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    fetch("../products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: this.recalculateAverage(data)
        });
      });
  }

  recalculateAverage(products) {
    return products
      .map(product => {
        let ratingSum =  product.reviews.reduce(((sum, review) => sum + review.rating), 0);

        product.rating = (ratingSum / product.reviews.length).toFixed(1);
        
        return product;
      });
  }

  addRatingHandler(ratingValue, ratedProduct) {
    console.log("ADDING RATING!");
    ratedProduct.reviews.push({
      id: Math.random()
        .toString(36)
        .substring(7),
      username: "Jurica Šeparović",
      title: "My rating",
      text: "My rating",
      rating: ratingValue
    });

    let productsWithRating = this.state.products.map(product => {
      if(product.id === ratedProduct.id) {
        return ratedProduct;
      }

      return product;
    });

    this.setState({
      products: this.recalculateAverage(productsWithRating),
      whislist: this.recalculateAverage(this.state.whislist)
    });
  }

  isProductInWishlist(product) {
    return this.state.whislist.includes(product);
  }

  addToWhishlistHandler(favoritedProduct) {
    if (this.isProductInWishlist(favoritedProduct)) {
      return this.removeFromWhislitHandler(favoritedProduct.id);
    }

    let newWhislist = [];

    newWhislist.push(...this.state.whislist, favoritedProduct);

    this.setState({
      whislist: newWhislist
    });
  }

  removeFromWhislitHandler(productId) {
    let newWhislist = this.state.whislist.filter(p => p.id !== productId);

    this.setState({
      whislist: newWhislist
    });
  }

  productSearchHandler(term) {
    if (term.length < 1) {
      return this.fetchProducts();
    }

    let foundProducts = [];
    foundProducts = this.state.products.filter(product => {
      return (
        product.name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) !==
        -1
      );
    });

    this.setState({
      products: foundProducts
    });
  }

  onDetailsClickHandler(productId) {
    this.setState({
      displayProduct: productId
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                state={this.state}
                productSearchHandler={this.productSearchHandler.bind(this)}
                isProductInWishlist={this.isProductInWishlist.bind(this)}
                addRatingHandler={this.addRatingHandler.bind(this)}
                addToWhishlistHandler={this.addToWhishlistHandler.bind(this)}
                onDetailsClickHandler={this.onDetailsClickHandler.bind(this)}
              />
            )}
          />

          <Route
            path="/details/:id"
            render={() => (
              <Details
                state={this.state}
                addRatingHandler={this.addRatingHandler.bind(this)}
                addToWhishlistHandler={this.addToWhishlistHandler.bind(this)}
                isProductInWishlist={this.isProductInWishlist.bind(this)}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
