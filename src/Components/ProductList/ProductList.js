import Product from "../Product/Product";
import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    let products = this.props.products.map(product => {
      return <Product 
        key={product.id} 
        product={product}
        inWishList={this.props.isProductInWishlist(product)} 
        addToWhishlistHandler={this.props.addToWhishlistHandler} 
        addRatingHandler={this.props.addRatingHandler} 
        onDetailsClickHandler={this.props.onDetailsClickHandler}
      />;
    });

    return (
      <div className="container">
        <h1>Product list</h1>
        <div className="row align-items-center product-list">
          {products.length > 0 ? products : 'No search results found.'}
          {products}
        </div>
      </div>
    );
  }
}

export default ProductList;
