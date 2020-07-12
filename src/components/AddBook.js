import React from "react";
import { Link } from "react-router-dom";

const AddBook = (props) => {
  const { resetsearch } = props;
  return (
    <Link to="/search">
      <button onClick={() => resetsearch()}>Add a book</button>
    </Link>
  );
};

export default AddBook;
