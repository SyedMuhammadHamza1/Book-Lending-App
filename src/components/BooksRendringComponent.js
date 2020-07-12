import React from "react";
const BooksRendringComponent = (props) => {
  const { heading, book, conditionalText, updateFunction } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{heading}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {book &&
            book.map((item, index) => {
              return (
                (item.shelf === conditionalText && (
                  <li key={index}>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={
                            "imageLinks" in item
                              ? {
                                  width: 128,
                                  height: 193,
                                  backgroundImage: `url(${
                                    item.imageLinks.smallThumbnail
                                  })`,
                                }
                              : {
                                  width: 128,
                                  height: 193,
                                }
                          }
                        />
                        <div className="book-shelf-changer">
                          <select
                            value={item.shelf}
                            onChange={(e) => updateFunction(item, e)}
                          >
                            <option value="move" disabled>
                              Move to...
                            </option>
                            <option value="currentlyReading">
                              Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{item.title}</div>
                      {"authors" in item ? (
                        <div className="book-authors">
                          {item.authors.map((author, index) => {
                            return (
                              <label key={index}>
                                {author} <br />
                              </label>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="book-authors"> No Author Found </div>
                      )}
                    </div>
                  </li>
                )) ||
                (conditionalText === "search" && (
                  <li key={index}>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={
                            "imageLinks" in item
                              ? {
                                  width: 128,
                                  height: 193,
                                  backgroundImage: `url(${
                                    item.imageLinks.smallThumbnail
                                  })`,
                                }
                              : {
                                  width: 128,
                                  height: 193,
                                }
                          }
                        />
                        <div className="book-shelf-changer">
                          <select
                            value={"shelf" in item ? item.shelf : "none"}
                            onChange={(e) => updateFunction(item, e)}
                          >
                            <option value="move" disabled>
                              Move to...
                            </option>
                            <option value="currentlyReading">
                              Currently Reading
                            </option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{item.title}</div>
                      {"authors" in item ? (
                        <div className="book-authors">
                          {item.authors.map((author, index) => {
                            return (
                              <label key={index}>
                                {author} <br />
                              </label>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="book-authors"> No Author Found </div>
                      )}
                    </div>
                  </li>
                ))
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default BooksRendringComponent;
