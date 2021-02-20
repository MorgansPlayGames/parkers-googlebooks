import React from "react";
import Book from "../Book"


function BookList(props) {
  return (
    <div>
        <p>Book1</p>
        <Book />
        <p>Book2</p>
        <Book />
    </div>
  );
}

export default BookList;