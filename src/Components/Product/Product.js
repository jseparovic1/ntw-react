import React, { Component } from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import "./product.css";

export default class Product extends Component {
  render() {
    let reviews = this.props.product.reviews.map(review => {
      return (
        <div className="mb-4 d-flex p-10" key={review.id}>
          <div className="d-flex flex-column justify-content-between align-items-center mr-5 w-25">
            <img
              className="w-50"
              alt="Avatar"
              src={"https://www.gravatar.com/avatar/" + review.id}
            />
            <span className="text-muted">{review.username}</span>
          </div>
          <div className="d-flex flex-column justify-content-between">
            <h2>{review.title}</h2>
            <div>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={review.rating}
                editing={false}
              />
            </div>
            <p>{review.text}</p>
          </div>
        </div>
      );
    });

    return (
      <div className="col-12 product">
        <div className="mb-4 pt-5 box-shadow d-flex flex-row align-items-start">
          <img
            className="h-75"
            src={this.props.product.picture}
            alt="Product"
          />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{this.props.product.name} </h5>
              <div className="text-muted">
                {this.props.product.rating} / 5 (based on{" "}
                {this.props.product.reviews.length} reviews)
              </div>
            </div>
            <p className="card-text">{this.props.product.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between">
                <button
                  onClick={() =>
                    this.props.addToWhishlistHandler(this.props.product)
                  }
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  {this.props.inWishList ? "Remove" : "Whislist"}
                </button>
                <div className="ml-4 d-flex">
                  <StarRatingComponent
                    name={this.props.product.name}
                    starCount={5}
                    onStarClick={ratingValue =>
                      this.props.addRatingHandler(
                        ratingValue,
                        this.props.product
                      )
                    }
                  />
                  <p className="ml-2">Ocijeni</p>
                </div>
              </div>
              {this.props.withReviews !== true && (
                <Link
                  className="btn btn-sm btn-outline-secondary"
                  to={"/details/" + this.props.product.id}
                  onClick={() =>
                    this.props.onDetailsClickHandler(this.props.product.id)
                  }
                >
                  Check details
                </Link>
              )}
            </div>
            {this.props.withReviews === true ? (
              <div className="mt-5">{reviews}</div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    );
  }
}
