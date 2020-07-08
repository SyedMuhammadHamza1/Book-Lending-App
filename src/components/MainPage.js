import React, { Component } from "react";
import * as API from "../BooksAPI";

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
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.state.bookData.map((item, index) => {
                    return (
                      item.shelf == "currentlyReading" && (
                        <li key={index}>
                          <div className="book">
                            <div className="book-top">
                              <div
                                className="book-cover"
                                style={{
                                  width: 128,
                                  height: 193,
                                  backgroundImage: `url(${
                                    item.imageLinks.smallThumbnail
                                  })`,
                                }}
                              />
                              <div className="book-shelf-changer">
                                <select>
                                  <option value="move" disabled>
                                    Move to...
                                  </option>
                                  <option value="currentlyReading">
                                    Currently Reading
                                  </option>
                                  <option value="wantToRead">
                                    Want to Read
                                  </option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{item.title}</div>
                            <div className="book-authors">
                              {item.authors[index]}
                            </div>
                          </div>
                        </li>
                      )
                    );
                  })}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.state.bookData.map((item, index) => {
                    return (
                      item.shelf == "wantToRead" && (
                        <li key={index}>
                          <div className="book">
                            <div className="book-top">
                              <div
                                className="book-cover"
                                style={{
                                  width: 128,
                                  height: 193,
                                  backgroundImage: `url(${
                                    item.imageLinks.smallThumbnail
                                  })`,
                                }}
                              />
                              <div className="book-shelf-changer">
                                <select>
                                  <option value="move" disabled>
                                    Move to...
                                  </option>
                                  <option value="currentlyReading">
                                    Currently Reading
                                  </option>
                                  <option value="wantToRead">
                                    Want to Read
                                  </option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{item.title}</div>
                            <div className="book-authors">
                              {item.authors[0]}
                            </div>
                          </div>
                        </li>
                      )
                    );
                  })}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.state.bookData.map((item, index) => {
                    return (
                      item.shelf == "read" && (
                        <li key={index}>
                          <div className="book">
                            <div className="book-top">
                              <div
                                className="book-cover"
                                style={{
                                  width: 128,
                                  height: 193,
                                  backgroundImage: `url(${
                                    item.imageLinks.smallThumbnail
                                  })`,
                                }}
                              />
                              <div className="book-shelf-changer">
                                <select>
                                  <option value="move" disabled>
                                    Move to...
                                  </option>
                                  <option value="currentlyReading">
                                    Currently Reading
                                  </option>
                                  <option value="wantToRead">
                                    Want to Read
                                  </option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{item.title}</div>
                            <div className="book-authors">
                              {item.authors[0]}
                            </div>
                          </div>
                        </li>
                      )
                    );
                  })}
                </ol>
              </div>
            </div>
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
