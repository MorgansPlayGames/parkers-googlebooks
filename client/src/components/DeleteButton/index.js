import React from "react";
import API from "../../utils/API";

function DeleteButton(props) {
  return <button onClick={deleteBook}>Delete Book</button>;
  function deleteBook() {
    API.deleteBook(props.bookId)
      .then(() => props.loadBooks())
      .catch((err) => console.log(err));
  }
}

export default DeleteButton;
