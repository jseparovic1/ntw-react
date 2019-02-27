import React, { Component } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ProductList from "../Components/ProductList/ProductList";
import Whislist from "../Components/Whislist/Whishlist";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header productSearchHandler={this.props.productSearchHandler} />
        <div className="container">
          <div className="row flex">
            <div className="col-md-8 order-2 order-md-1">
              <ProductList
                isProductInWishlist={this.props.isProductInWishlist}
                products={this.props.state.products}
                addToWhishlistHandler={this.props.addToWhishlistHandler}
                addRatingHandler={this.props.addRatingHandler}
                onDetailsClickHandler={this.props.onDetailsClickHandler}
              />
            </div>
            <div className="col-md-4 order-1 order-md-2">
              <Whislist
                products={this.props.state.whislist}
                addToWhislistHandler={this.props.addToWhislistHandler}
              />
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}

export default Home;
