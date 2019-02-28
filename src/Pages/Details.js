import React, { Component } from "react";
import "../App.css";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Product from "../Components/Product/Product";
import ProductList from "../Components/ProductList/ProductList";
import Whislist from "../Components/Whislist/Whishlist";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searching: false
    };

    if (!('displayProduct' in this.state)) {
      let productToDisplay = this.props.state.products
        .filter(product => {
          return product.id === this.props.state.displayProduct;
        })
        .shift();
      
      this.state = {
        ...this.state,
        displayProduct: productToDisplay
      };
    }
  }

  productSearchTypeHandler(searchQuery) {
    if (searchQuery.length < 1) {
      this.props.productSearchHandler(searchQuery);

      return this.setState({
        searching: false
      });
    }

    this.props.productSearchHandler(searchQuery);

    this.setState({
      searching: true
    });
  }

  render() {
    let productRender;

    if (!this.state.searching) {
      productRender = (
        <Product
          product={this.state.displayProduct}
          inWishList={this.props.isProductInWishlist(this.state.displayProduct)}
          addToWhishlistHandler={this.props.addToWhishlistHandler}
          addRatingHandler={this.props.addRatingHandler}
          onDetailsClickHandler={this.props.onDetailsClickHandler}
          withReviews={true}
        />
      );
    } else {
      productRender = (
        <ProductList
          isProductInWishlist={this.props.isProductInWishlist}
          products={this.props.state.products}
          addToWhishlistHandler={this.props.addToWhishlistHandler}
          addRatingHandler={this.props.addRatingHandler}
          onDetailsClickHandler={this.props.onDetailsClickHandler}
        />
      );
    }

    return (
      <>
        <Header
          productSearchHandler={searchQuery =>
            this.productSearchTypeHandler(searchQuery)
          }
        />
        <div className="container">
          <div className="row flex">
            <div className="col-md-8 order-2 order-md-1">{productRender}</div>
            <div className="col-md-4 order-1 order-md-2">
              <Whislist
                products={this.props.state.whislist}
                addToWhislistHandler={this.props.addToWhislistHandler}
              />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Details;
