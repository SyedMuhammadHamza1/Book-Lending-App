import React, { Component } from "react";
import * as API from "../BooksAPI";
import BooksRendringComponent from "./BooksRendringComponent";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
    };
  }
  componentDidMount() {
    API.getAll()
      .then((success) => {
        this.setState((state) => {
          return { bookData: success };
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
  };
  render() {
    console.log(this.state.bookData);
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BooksRendringComponent
              heading={"Currently Reading"}
              book={this.state.bookData}
              conditionalText={"currentlyReading"}
              updateFunction={this.updateBookShelf}
            />
            <BooksRendringComponent
              heading={"Want To Read"}
              book={this.state.bookData}
              conditionalText={"wantToRead"}
              updateFunction={this.updateBookShelf}
            />
            <BooksRendringComponent
              heading={"Read"}
              book={this.state.bookData}
              conditionalText={"read"}
              updateFunction={this.updateBookShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default MainPage;
