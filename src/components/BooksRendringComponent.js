import React from "react";
const BooksRendringComponent = (props) => {
  const { heading, book, conditionalText, updateFunction } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{heading}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {book.map((item, index) => {
            return (
              item.shelf === conditionalText && (
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
                        <select onChange={(e) => updateFunction(item.id, e)}>
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
                    <div className="book-authors">
                      {item.authors.map((author, index) => {
                        return (
                          <label key={index}>
                            {author} <br />
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </li>
              )
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default BooksRendringComponent;
