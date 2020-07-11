import React, { Component } from "react";
import * as API from "../BooksAPI";
import BooksRendringComponent from "./BooksRendringComponent";
import { Link } from "react-router-dom";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
    };
  }

  updateBookShelf = (bookId, e) => {
    debugger;
    let book = {
      id: bookId,
    };
    API.update(book, e.target.value)
      .then((success) => {
        debugger;
        console.log(success);
      })
      .catch((err) => {
        debugger;
        console.log(err);
      });
  };
  render() {
    console.log(this.state.bookData, "Data");
    const { heading, book, searchFunction, updateFunction } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(e) => searchFunction(e)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksRendringComponent
            heading={""}
            book={book}
            updateFunction={updateFunction}
            conditionalText={"search"}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
