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
    <main className="p-2 m-2">
      <BookSaved books={books} loadBooks={loadBooks} />
    </main>
  );
}

export default Saved;
