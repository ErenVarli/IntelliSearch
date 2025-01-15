import React from "react";
import Searchbar from "../components/SearchBar/Searchbar";
import HomeMessage from "./HomeMessage";
import ButtonFilter from "../components/Buttons/ButtonFilter";

const IntelliSearch: React.FC = () => {
  return (
    <div>
      <div>
        <ButtonFilter />
      </div>
      <div className="home-content">
        <HomeMessage />
        <Searchbar />
      </div>
    </div>
  );
};

export default IntelliSearch;
