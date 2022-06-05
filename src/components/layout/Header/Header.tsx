import React from "react";
import "./Header.scss";

import { Button } from "../../common/Button/Button";
import { TopSearch } from "../../TopSearch/TopSearch";

const Header = () => {
  return (
    <header>
      <div className="header__logo">szybkiesprzatanie.networkmanager.pl
</div>
      <Button text="Dodaj ogłoszenie" />
      <TopSearch />
    </header>
  );
};

export { Header };
