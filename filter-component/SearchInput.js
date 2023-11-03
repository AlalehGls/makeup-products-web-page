import React from "react";

export default function SearchInput({ searchText, handleSearchTextChange }) {
  return (
    <div className="form-row">
      <label htmlFor="search-input">Search:</label>
      <input
        type="text"
        id="search-input"
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder="Search by product name..."
      />
    </div>
  );
}