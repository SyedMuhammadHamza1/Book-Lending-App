import React, { Component } from "react";
import * as API from "../BooksAPI";
import BooksRendringComponent from "./BooksRendringComponent";
import { Link } from "react-router-dom";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
    };
  }

  render() {
    const { heading, book, resetsearch, updateFunction } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BooksRendringComponent
              heading={"Currently Reading"}
              book={book}
              updateFunction={updateFunction}
              conditionalText={"currentlyReading"}
            />
            <BooksRendringComponent
              heading={"Want To Read"}
              book={book}
              updateFunction={updateFunction}
              conditionalText={"wantToRead"}
            />
            <BooksRendringComponent
              heading={"Read"}
              book={book}
              updateFunction={updateFunction}
              conditionalText={"read"}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button onClick={() => resetsearch()}>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
