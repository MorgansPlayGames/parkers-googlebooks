import React, { useState, useEffect } from "react";
import BookList from "../../components/BookList";
import SearchBar from "../../components/Searchbar";
import useDebounce from "../../utils/debounceHook";
import API from "../../utils/API";

function Search() {
  const [search, setSearch] = useState("1984");
  const [error, setError] = useState("");
  const [book, setBook] = useState([]);

  const debouncedSearchTerm = useDebounce(search, 500);

  useEffect(() => {
    if (!search) {
      return;
    }

    if (debouncedSearchTerm) {
      API.search(search)
        .then((res) => {
          if (res.data.length === 0) {
            throw new Error("No results found.");
          }
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }
          setBook(res.data);
        })
        .catch((err) => setError(err));
    }
  }, [debouncedSearchTerm]);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <SearchBar handleInputChange={handleInputChange} results={search} />
      <div>{error}</div>
      <BookList
        books={book}
      />
    </>
  );
}

export default Search;
