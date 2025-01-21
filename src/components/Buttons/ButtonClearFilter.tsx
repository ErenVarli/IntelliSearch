import React from "react";
import Button from "react-bootstrap/Button";
import { clearAllFilters } from "../../searchEngineAlgoV2/Actions/Clear";

const marginStyle = {
  marginBottom: 15,
  marginTop: 20,
};

const ButtonStyle = {
  color: "#55555F",
  backgroundColor: "#F0F0F0",
  border: "none",
};

const ButtonClearFilter: React.FC = () => {
  return (
    <div style={marginStyle}>
      <Button id="button-clear" style={ButtonStyle} onClick={clearAllFilters}>Effacer</Button>
    </div>
  );
};

export default ButtonClearFilter;
