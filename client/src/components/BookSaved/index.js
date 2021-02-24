import React, { useState } from "react";
import Book from "../Book";

function BookSaved(props) {
  let bookList = props.books;
  if (bookList.length > 0) {
    return bookRender();
  } else {
    return <p>Please save a book!</p>;
  }

  function bookRender() {
    return (
      <div>
        {bookList.map((book, index) => {
          return <Book books={book} index={index} />;
        })}{" "}
      </div>
    );
  }
}
export default BookSaved;
