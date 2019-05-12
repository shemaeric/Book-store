import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const BookContext = React.createContext();
class BookProvider extends Component {
  state = {
    books: [],
    detailBooks: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { books: tempProducts };
    });
  };

  getItem = id => {
    const product = this.state.books.find(item => item.id === id);
    return product;
  };

  handleDetails = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailBooks: product };
    });
  };
  addToCart = id => {
    let tempProducts = [...this.state.books];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { books: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  render() {
    return (
      <BookContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {this.props.children}
      </BookContext.Provider>
    );
  }
}

const BookConsumer = BookContext.Consumer;

export { BookProvider, BookConsumer };
