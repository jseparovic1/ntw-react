import React, { Component } from "react";
import "../App.css";
import Header from "../Components/Header/Header";
import StarRatingComponent from "react-star-rating-component";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);

    let displayProduct = this.props.state.products.filter(product => {
      return product.id === this.props.state.displayProduct;
    });

    let product = displayProduct[0];

    let reviews = product.reviews.map(review => {
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
      <>
        <Header />
        <div className="d-flex justify-content-center">
          <div className="col-10 mt-2">
            <div className="card mb-4 box-shadow">
              <img src={product.picture} alt="Product" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <span className="mr-2">{product.rating}</span> 
                    <StarRatingComponent
                      name="rate"
                      starCount={5}
                      value={product.rating}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="col-10 mt-5">{reviews}</div>
        </div>
      </>
    );
  }
}

export default Details;
