import Button from "react-bootstrap/Button";
import { searchEngine } from "../../searchEngineAlgoV2/searchAlgorithm.ts";

const buttonStyle = {
  width: "min-content",
  marginTop: 30,
  float: "right" as const,
  backgroundColor: "#375FAC",
  borderRadius: "5px",
};

const ButtonSearch: React.FC = () => {
  
  const searchFunctions = () => {
    searchEngine();
  };
  return (
    <div style={buttonStyle}>
      <Button
        id="search-btn"
        variant="none"
        className="text-light"
        onClick={searchFunctions}
      >
        Search
      </Button>
    </div>
  );
};

export default ButtonSearch;
