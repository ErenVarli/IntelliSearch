import React from "react";
import Button from "react-bootstrap/Button";
import { searchEngine } from "../../searchEngineAlgoV2/searchAlgorithm.ts";

const buttonStyle = {
  width: "min-content",
  marginTop: 30,
  float: "right" as const
};

const ButtonSearch: React.FC = () => {
  return (
    <div style={buttonStyle}>
      <Button variant="primary" onClick={searchEngine}>
        Search
      </Button>
    </div>
  );
};

export default ButtonSearch;
