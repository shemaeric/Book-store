import React, { Component } from "react";
import { BookConsumer } from "../context";
import { Link } from "react-router-dom";
import ButtonContainer from "./Button";

class BookDetails extends Component {
  render() {
    return (
      <BookConsumer>
        {value => {
          const {
            id,
            title,
            img,
            price,
            author,
            info,
            inCart
          } = value.detailBooks;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* book info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="image product" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3">
                  <h2>Title: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Author: <span className="text-uppercase">{author}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price: <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about the product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                    cart
                    disabled= {inCart?true:false}
                    onClick = {() => {
                      value.addToCart(id);
                      value.openModel(id);
                    }}
                    >
                      {inCart? "inCart": "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </BookConsumer>
    );
  }
}

export default BookDetails;
