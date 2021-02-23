import React from "react";



function Searchbar(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Search For Books"
          id="term"
        />
      </div>
    </form>
  );
}

export default Searchbar;