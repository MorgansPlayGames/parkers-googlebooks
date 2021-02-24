import React, { useState, useEffect } from "react";
import BookSaved from "../../components/BookSaved";
import API from "../../utils/API"



function Saved() {
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };
  
  return (
    <>
      <BookSaved books={books} loadBooks={loadBooks} />
    </>
  );
}

export default Saved;
