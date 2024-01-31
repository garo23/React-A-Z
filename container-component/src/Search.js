import React from "react";

const Search = ({ val, onSearch, ...props }) => {
  return (
    <input
      value={val}
      onChange={onSearch}
      placeholder="Search for any book"
      {...props}
    />
  );
};

export default Search;
