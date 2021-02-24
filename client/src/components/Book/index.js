import React from "react";

function Book(props) {
  if (props.books) {
    let book = props.books;
    if (props.books.volumeInfo) {
      book = props.books.volumeInfo;
    }

    return (
      <div key={props.index}>
        <p value={book.title}>
          Title: {book.title}
        </p>
        {picCheck(book)}
        {authorCheck(book)}
        <p>Description: {book.description}</p>
        <a href={book.infoLink} target="_blank">
          Get Book Here
        </a>
        {buttonCheck()}
      </div>
    );
  } else {
    return (
      <div>
        <p>Book Here</p>
      </div>
    );
  }

  function buttonSubmit(event) {
    let book = props.books.volumeInfo;
    let authors = book.authors;
    if (book.author) authors = book.author;
    props.setFormObject({
      title: book.title,
      authors: authors,
      infoLink: book.infoLink,
      imageLink: book.imageLinks.smallThumbnail,
      description: book.description
    });
    props.handleFormSubmit(event);
  }

  function buttonCheck() {
    if (props.handleFormSubmit) {
      return <button onClick={buttonSubmit}>Save Book</button>;
    } else {
      return null;
    }
  }

  function picCheck(book) {
    if (book.imageLink) {
      return <img src={book.imageLink} alt={book.title} />;
    } else if (book.imageLinks.smallThumbnail) {
      return <img src={book.imageLinks.smallThumbnail} alt={book.title} />;
    } else {
      return <p>No image available.</p>;
    }
  }

  function authorCheck(book) {
    if (book.author) {
      return (
        <p name="author" value={book.author}>
          Author:{book.author}
        </p>
      );
    } else if (book.authors) {
      return (
        <p name="author" value={book.authors}>
          Authors:{" "}
          {book.authors.map((a) => (
            <span>{a}, </span>
          ))}{" "}
        </p>
      );
    }
  }
}

export default Book;
