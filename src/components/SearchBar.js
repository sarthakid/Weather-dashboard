import React, { useState } from "react";

const SearchBar = ({ setCity }) => {
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setCity(input);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter city"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
