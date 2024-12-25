import React, { useState, FormEvent, ChangeEvent } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { SearchBarProps } from "../App/App.types";

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query.trim()) {
      return toast.error("Please fill in the field");
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <div className={css.boxForm}>
      <header>
        <form onSubmit={handleSubmit} className={css.searchForm}>
          <input
            name="search"
            value={query}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            className={css.inputForm}
          />
          <button type="submit" className={css.formBtn}>
            Search
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
