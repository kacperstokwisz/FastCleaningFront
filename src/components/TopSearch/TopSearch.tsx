import React, { SyntheticEvent, useContext, useState } from "react";
import "./TopSearch.scss";

import { Button } from "../common/Button/Button";
import { SearchContext } from "../../contexts/search.context";

const TopSearch = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [inputVal, setInputVal] = useState(search);

  const setSearchFromLocalState = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearch(inputVal);
  };
  return (
    <form onSubmit={setSearchFromLocalState}>
      <input
        className="top-search__input"
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <Button text="Szukaj" />
    </form>
  );
};

export { TopSearch };
