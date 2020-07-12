import React from "react";
import BooksRendringComponent from "./BooksRendringComponent";
import AddBook from "./AddBook";

const MainPage = (props) => {
  const { book, resetsearch, updateFunction } = props;
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
        <AddBook resetsearch={resetsearch} />
      </div>
    </div>
  );
};

export default MainPage;
