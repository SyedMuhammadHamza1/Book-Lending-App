import React from "react";
import * as API from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";

class BooksApp extends React.Component {
  state = {
    bookData: [],
    searchBook: [],
  };
  componentDidMount() {
    API.getAll()
      .then((success) => {
        this.setState((state) => {
          return {
            bookData: success,
          };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  updateBookShelf = (bookId, e) => {
    API.update(bookId, e.target.value)
      .then((success) => {})
      .catch((err) => {
        console.log(err);
      });
    const updatedBooks = this.state.bookData.map((b) => {
      if (b.id === bookId.id) {
        b.shelf = e.target.value;
      }
      return b;
    });

    this.setState({
      bookData: updatedBooks,
    });
  };
  onSearchBook = (e) => {
    API.search(e.target.value)
      .then((success) => {
        if (success.length > 0) {
          this.setState((state) => {
            return { searchBook: success };
          });
        } else {
          this.setState({
            searchBook: [],
          });
        }
      })
      .catch((err) => {
        this.setState({
          searchBook: [],
        });
        console.log("Error", err);
      });
  };
  resetSearch = () => {
    this.setState({ searchBook: [] });
  };
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MainPage
              book={this.state.bookData}
              updateFunction={this.updateBookShelf}
              resetsearch={this.resetSearch}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage
              book={this.state.searchBook}
              updateFunction={this.updateBookShelf}
              searchFunction={this.onSearchBook}
              previousBooks={this.state.bookData}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
