import React from "react";

const Books = ({ books }) => {
  return books.map((book, index) => {
    return (
      <ul key={index}>
        <li>Book: {book.name}</li>
        <li>Author: {book.author}</li>
      </ul>
    );
  });
};
export default Books;
