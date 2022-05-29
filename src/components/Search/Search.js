import React from 'react'
import styles from "./Search.module.scss";

const Search = ({ setSearch, updatePageNumber }) => {
  return (
    <div className="container">
      <form
        className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-start position-relative mb-5`}
      >
        <input
          onChange={(e) => {
            updatePageNumber(1);
            setSearch(e.target.value);
          }}
          placeholder="Search for characters"
          className={styles.input}
          type="text"
        />
      </form>
    </div>
  );
};

export default Search;
