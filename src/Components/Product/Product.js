import React, { Component } from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import "./product.css";

export default class Product extends Component {
  render() {
    return (
      <div className="col-12 product">
        <div className="mb-4 box-shadow d-flex flex-row align-items-center">
          <img
            className="h-75"
            src={this.props.product.picture}
            alt="Product"
          />
          <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{this.props.product.name} </h5>
            <div className="text-muted">{this.props.product.rating} / 5 (based on {this.props.product.reviews.length} reviews)</div>
          </div>
            <p className="card-text">{this.props.product.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between">
                <button
                  onClick={() => this.props.addToWhishlistHandler(this.props.product)}
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  {this.props.inWishList ? "Remove" : "Whislist"}
                </button>
                <div className="ml-4 d-flex">
                  <StarRatingComponent
                    name={this.props.product.id}
                    starCount={5}
                    onStarClick={ratingValue => this.props.addRatingHandler(ratingValue, this.props.product)}
                  />
                  <p>Ocijeni</p>
                </div>
              </div>
              <Link
                className="btn btn-sm btn-outline-secondary"
                to={"/details/" + this.props.product.id}
                onClick={() =>
                  this.props.onDetailsClickHandler(this.props.product.id)
                }
              >
                Check details
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
