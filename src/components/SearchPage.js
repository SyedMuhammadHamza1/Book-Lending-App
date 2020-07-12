import React from "react";
import BooksRendringComponent from "./BooksRendringComponent";
import Back from "./Back";
import SearchBox from "./SearchBox";

const SearchPage = (props) => {
  const { book, searchFunction, updateFunction, previousBooks } = props;
  const updatedBooks = book.map((book) => {
    previousBooks.map((pb) => {
      if (pb.id === book.id) {
        book.shelf = pb.shelf;
      }
      return pb;
    });
    return book;
  });
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Back />
        <SearchBox searchFunction={searchFunction} />
      </div>
      <div className="search-books-results">
        <BooksRendringComponent
          heading={""}
          book={updatedBooks}
          updateFunction={updateFunction}
          conditionalText={"search"}
        />
      </div>
    </div>
  );
};

export default SearchPage;
