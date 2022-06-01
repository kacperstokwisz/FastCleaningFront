import React, { useState } from "react";
import "./TopSearch.scss";

import { Button } from "../common/Button/Button";

const TopSearch = () => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="top-search__input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button text="Szukaj" />
    </form>
  );
};

export { TopSearch };
