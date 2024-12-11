import React from "react";
import Searchbar from "../components/SearchBar/Searchbar";
import HomeMessage from "./HomeMessage";

const IntelliSearch: React.FC = () => {
  return (
    <>
      <HomeMessage />
      <Searchbar />
    </>
  );
};

export default IntelliSearch;
