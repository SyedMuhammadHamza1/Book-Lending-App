import React, { Component } from "react";
import * as API from "../BooksAPI";
import BooksRendringComponent from "./BooksRendringComponent";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
    };
  }
  onSearchBook = (e) => {
    console.log(e.target.value);
    API.search(e.target.value)
      .then((success) => {
        if (success.length > 0) {
          console.log(success);
          this.setState((state) => {
            return { bookData: success };
          });
        } else {
          this.setState({
            bookData: [],
          });
        }
      })
      .catch((err) => {
        debugger;
        this.setState({
          bookData: [],
        });
        console.log("Error Aya", err);
      });
  };
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
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button
            className="close-search"
            onClick={() => this.setState({ showSearchPage: false })}
          >
            Close
          </button>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.onSearchBook}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BooksRendringComponent
            heading={""}
            book={this.state.bookData}
            updateFunction={this.updateBookShelf}
            conditionalText={"search"}
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
