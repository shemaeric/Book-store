import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { BookConsumer } from "../context";

class Book extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.book;
    return (
      <BookStyler className="col-9 mx-auto col-md col-lg-3 my-3">
        <div className="card">
          <BookConsumer>
            {value => (
              <div className="img-container p-5"
              onClick = {() => {
                value.handleDetails(id);
              }}
              >
                <Link to={"/details"}>
                  <img src={img} alt="product" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick= {() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      {" "}
                      in Cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </BookConsumer>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">${price}</span>
            </h5>
          </div>
        </div>
      </BookStyler>
    );
  }
}

Book.propTypes = {
  book: propTypes.shape({
    id: propTypes.number,
    title: propTypes.string,
    img: propTypes.string,
    price: propTypes.number,
    inCart: propTypes.bool
  }).isRequired
};

const BookStyler = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  .card :hover {
    border: 0.04rem solid rgba(100, 90, 90, 0.2);
    box-shadow: 2px 2px 5px 0px rgba(156, 140, 140, 0.2);
  }
  .card-footer :hover {
    background: rgb(243, 240, 243);
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 1s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.6rem 0 0 0;
    transform: translate(100%, 100%);
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
    transition: all 0.5s linear;
  }

  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;

export default Book;
