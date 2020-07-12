import { Link } from "react-router-dom";
import React from "react";
const Back = () => {
  return (
    <Link to="/">
      <button className="close-search">Close</button>
    </Link>
  );
};

export default Back;
