import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const BookContext = React.createContext();
class BookProvider extends Component {
  state = {
    books: [],
    detailBooks: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
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
        this.addTotals();
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
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
 
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.price * product.count;

    this.setState(() => {
      return { cart: [...tempCart]}
    }, () => {
      this.addTotals();
    })

  };
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
 
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    
    if(product.count === 0 ) {
      this.removeItem(id); 
    }
    else{
      console.log(product.total);
      product.total = product.price * product.count;
      this.setState(() => {
        return { cart: [...tempCart]}
      }, () => {
        this.addTotals();
      })
    }
  };
  removeItem = (id) => {
    let tempProducts = [...this.state.books];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    const removedItem = tempProducts[index];
    
    removedItem.inCart = false;
    removedItem.count = 0;
    removedItem.total = 0;


    this.setState(() => {
      
      return {
        cart: [...tempCart],
        books: [...tempProducts]
      }
    }, () => {
      this.addTotals();
    })
  };
  clearCart = () => {
    this.setState(() => {
      return {cart: []}
    }, () => {
      this.setProducts();
      this.addTotals();
    })
  }
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total =  subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      }
    })
  }
  render() {
    return (
      <BookContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart 
        }}
      >
        {this.props.children}
      </BookContext.Provider>
    );
  }
}

const BookConsumer = BookContext.Consumer;

export { BookProvider, BookConsumer };
