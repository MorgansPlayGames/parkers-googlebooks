import React, { useState } from "react";
import Book from "../Book";



function BookList(props) {
  const [books, setBooks] = useState(["","",""]);
  let HFS = props.handleFormSubmit
  let setFormObject = props.setFormObject;
  if(props.handleFormSubmit){
    HFS = props.handleFormSubmit
  } else {
    HFS="#"
    setFormObject="#"
  }

  if(props.books.items!=books){
    setBooks(props.books.items)
  } 
  if(books){
    return(
      <div>
        
          <Book books={books[0]} handleFormSubmit={HFS} setFormObject={setFormObject} />
          <Book books={books[1]} handleFormSubmit={HFS} setFormObject={setFormObject} />
          <Book books={books[2]} handleFormSubmit={HFS} setFormObject={setFormObject} />
        
      </div>
    )
  } else {
    return <div>search books</div>
  }
  
}
export default BookList;
