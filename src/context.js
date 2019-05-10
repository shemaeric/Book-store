import React, { Component } from 'react';
import { storeProducts, detailProduct } from "./data";


const BookContext = React.createContext();
class BookProvider extends Component {
    state = {
        books:storeProducts,
        detailBooks: detailProduct  
    }

    handleDetails = () => {
        console.log('hello from details')
    }
    addToCart = () => {
        console.log('hello from add to cart')
    }
    render() {
        return (
            <BookContext.Provider value={{...this.state,
            handleDetails:this.handleDetails,
            addToCart:this.addToCart}}>
                {this.props.children}
            </BookContext.Provider>
        );
    } 
}

const BookConsumer = BookContext.Consumer;

export {
    BookProvider,
    BookConsumer
}