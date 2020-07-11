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
    const updatedBooks = this.state.bookData.map((b) => {
      if (b.id === book.id) {
        b.shelf = e.target.value;
      }
      return b;
    });

    this.setState({
      bookData: updatedBooks,
    });
  };
  onSearchBook = (e) => {
    console.log(e.target.value);
    API.search(e.target.value)
      .then((success) => {
        if (success.length > 0) {
          console.log(success);
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
        debugger;
        this.setState({
          searchBook: [],
        });
        console.log("Error", err);
      });
  };
  resetSearch = () => {
    debugger;
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
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
