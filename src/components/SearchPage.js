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
  render() {
    const {
      heading,
      book,
      searchFunction,
      updateFunction,
      previousBooks,
    } = this.props;
    const updatedBooks = book.map((book) => {
      previousBooks.map((b) => {
        if (b.id === book.id) {
          book.shelf = b.shelf;
        }
        return b;
      });
      return book;
    });
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
            book={updatedBooks}
            updateFunction={updateFunction}
            conditionalText={"search"}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
