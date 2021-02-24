import React, { useState } from "react";
import Book from "../Book";
import API from "../../utils/API"

function BookList(props) {
  const [books, setBooks] = useState(["", "", ""]);
  const [formObject, setFormObject] = useState({
    title: "",
    authors: "",
    infoLink: "",
    imageLink: "",
    description: "",
  });
  
  function handleFormSubmit(event) {
    event.preventDefault();
    API.saveBook({
      title: formObject.title,
      authors: formObject.authors,
      infoLink: formObject.infoLink,
      imageLink: formObject.imageLink,
      description: formObject.description,
    })
      .then(console.log("Saved: ", formObject))
      .then(() =>
        setFormObject({
          title: "",
          authors: "",
          infoLink: "",
          imageLink: "",
          description: "",
        })
      )

      .catch((err) => console.log(err));
  }

  if (props.books.items != books) {
    setBooks(props.books.items);
  }
  if (books) {
    return (
      <div>
        <Book
          books={books[0]}
          handleFormSubmit={handleFormSubmit}
          setFormObject={setFormObject}
        />
        <Book
          books={books[1]}
          handleFormSubmit={handleFormSubmit}
          setFormObject={setFormObject}
        />
        <Book
          books={books[2]}
          handleFormSubmit={handleFormSubmit}
          setFormObject={setFormObject}
        />
      </div>
    );
  } else {
    return <div>search books</div>;
  }
}
export default BookList;
