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
            />
            <BooksRendringComponent
              heading={"Want To Read"}
              book={this.state.bookData}
              conditionalText={"wantToRead"}
            />
            <BooksRendringComponent
              heading={"Read"}
              book={this.state.bookData}
              conditionalText={"read"}
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
