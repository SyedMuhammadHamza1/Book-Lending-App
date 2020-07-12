import React from "react";
const SearchBox = (props) => {
  const { searchFunction } = props;
  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title or author"
        onChange={(e) => searchFunction(e)}
      />
    </div>
  );
};

export default SearchBox;
