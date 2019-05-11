import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Default from './components/Default';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails'

class App extends Component {
  render() {
    return (
      <React.Fragment>
         <Navbar></Navbar>
         <Switch>
           <Route exact path="/" component= { BookList }></Route>
           <Route path="/details" component= { BookDetails }></Route>
           <Route path="/cart" component= { Cart }></Route>
           <Route component= { Default }></Route>
         </Switch> 
      </React.Fragment>
    );
  }
}

export default App;
