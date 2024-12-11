import React, { useEffect } from "react";
import ButtonFilter from "../Buttons/ButtonFilter";

const topBar = {
  width: "100%",
  margin: "auto",
}

const Searchbar: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cse.google.com/cse.js?cx=5607be18da6bf4769";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div style={topBar} className="d-flex align-items-center">
      <div id="gcse-search-bar" className="gcse-search"></div>
      <ButtonFilter />
    </div>
  );
};
export default Searchbar;
