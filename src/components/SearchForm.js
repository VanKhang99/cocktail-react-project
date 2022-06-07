import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  console.log("IN SEARCH FORM");
  const { setSearchInput } = useGlobalContext();

  const inputRef = useRef();

  const handleInput = () => {
    setSearchInput(inputRef.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <section className="section-search">
      <div className="search-container">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="form__label">
            Search your favorite cocktail
          </label>
          <input
            ref={inputRef}
            type="text"
            name="input"
            id="name"
            className="form__input"
            onChange={handleInput}
          />
        </form>
      </div>
    </section>
  );
};

export default React.memo(SearchForm);
