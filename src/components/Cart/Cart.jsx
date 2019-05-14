import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { BookConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

class Cart extends Component {
  render() {
    return (
      <section>
        <BookConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value}></CartList>
                  <CartTotals value={value} history={this.props.history}></CartTotals>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </BookConsumer>
      </section>
    );
  }
}

export default Cart;
