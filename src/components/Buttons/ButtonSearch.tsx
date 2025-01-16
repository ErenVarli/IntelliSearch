import Button from "react-bootstrap/Button";
import { searchEngine } from "../../searchEngineAlgoV2/searchAlgorithm.ts";
import { useEffect } from "react";

const buttonStyle = {
  width: "min-content",
  marginTop: 30,
  float: "right" as const,
  backgroundColor: "#375FAC",
  borderRadius: "5px",
};

const ButtonSearch: React.FC = () => {
  useEffect(() => {
    const listener = (event: { code: string; preventDefault: () => void }) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        searchEngine();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div style={buttonStyle}>
      <Button
        id="search-btn"
        variant="none"
        className="text-light"
        onClick={searchEngine}
      >
        Search
      </Button>
    </div>
  );
};

export default ButtonSearch;
