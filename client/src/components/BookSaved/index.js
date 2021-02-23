import React, { useState } from "react";
import Book from "../Book";



function BookSaved(props) {
  const [books, setBooks] = useState(["",""]);

//   if(props.books.items!=books){
//     setBooks(props.books.items)
//   } 
  return(
    <div>
        <Book />
    </div>
  )
}
export default BookSaved;
