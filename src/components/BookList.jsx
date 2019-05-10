import React, { Component } from "react";
import Book from "./Book";
import Title from "./Title";
import { BookConsumer } from "../context";

class BookList extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <div className="py-5">
            <div className="container">
              <Title name="our" title="Books " />
              <div className="row">
                <BookConsumer>
                  {value => {
                    console.log(value);
                    return value.books.map(book => {
                      return <Book key="book.id" book={book} />;
                    });
                  }}
                </BookConsumer>
              </div>
            </div>
          </div>
        </React.Fragment>
        {/* <Book /> */}
      </div>
    );
  }
}

export default BookList;
