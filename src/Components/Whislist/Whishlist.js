import React, { Component } from "react";

class Whislist extends Component {
  render() {
    let products = this.props.products.map(product => {
      return (
        <div className="row align-items-center mb-3" key={product.id}>
          <div className="col-6">
            <img className="w-auto h-75" src={product.picture} alt={product.name + ' picture'}/>
          </div>
          <div className="col-6">
              <h5>{product.name}</h5>
              <span className="text-muted">ocjena {product.rating} od 5</span>
          </div>
        </div>
      );
    });

    return (
        <>
        <h1>Whislist</h1>
        <div className="row">
            {
                (products.length > 0) 
                ? <div className="col-12">{products}</div>
                : 'Whislist empty, please add something.'
            }
        </div>
        </>
    );
  }
}

export default Whislist;
