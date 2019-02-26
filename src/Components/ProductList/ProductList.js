import React, { Component } from "react";
import Product from "../Product/Product";

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let products = this.props.products.map(product => {
      return <Product key={product.id} product={product} />;
    });

    return (
      <div className="container">
        <h1>Lista proizvoda</h1>
        <div className="row">
          {products}
        </div>
      </div>
    );
  }
}

export default ProductList;
