import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <div className="col-6">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={this.props.product.picture}></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.product.name}</h5>
            <p className="card-text">{this.props.product.description}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Add to Favorite
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Rate
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
