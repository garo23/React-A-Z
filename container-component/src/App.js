import React, { useState } from "react";
import { books } from "./bookshelf.js";
import Books from "./Books";
import Search from "./Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  // performs a filtering on the questions
  // based on the user's input and returns a new array
  // which gets rendered to the DOM.

  const filteredBooks = books.filter((book) => {
    return book.name.includes(searchTerm);
  });
  return (
    <section>
      <Search name="search" onSearch={handleInputChange} val={searchTerm} />
      <Books books={filteredBooks} />
    </section>
  );
};
export default App;
