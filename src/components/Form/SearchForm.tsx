import Title from "../Titles/H/Titles";
import CheckOperators from "../Adjustment/CheckOperators";
import EssentialOperators from "../Adjustment/EssentialOperators";
import CombinedOperators from "../Adjustment/CombinedOperators";
import DateOperators from "../Adjustment/DatesOperators";
import HeaderForm from "./Header";
import ButtonSearch from "../Buttons/ButtonSearch";

interface PopupProps {
  onClose: () => void;
}

const formStyle = {
  width: "95%",
  height: "100%",
};

const closeBtnStyle = {
  fontSize: 12,
  fontWeight: 400,
  width: "min-content",
  textDecoration: "underline",
  border: "none",
  backgroundColor: "transparent",
};

const boxWidth = {
  width: "100%",
};

const fieldsetWidth = {
  margin: "auto",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
  padding: "15px",
};
const SearchForm: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div className="search-window" id="t-search-window">
      <HeaderForm />
      <form className="m-auto d-flex flex-column" style={formStyle}>
        <div className="d-flex mobile-wrap">
          <div style={boxWidth} className="d-flex flex-column p-2">
            <div>
              <Title
                className="mb-3"
                variante="h4"
                label="Essential operators"
              />
              <EssentialOperators />
            </div>
          </div>
          <div
            style={boxWidth}
            className="d-flex flex-column p-2 justify-content-between"
          >
            <div>
              <Title
                className="mb-3"
                variante="h4"
                label="Combined operators"
              />
              <CombinedOperators />
            </div>
            <div>
              <Title className="mb-3" variante="h4" label="Dates" />
              <DateOperators />
            </div>
            <div>
              <Title className="mb-3" variante="h4" label="File Types" />
              <fieldset
                style={fieldsetWidth}
                className="d-flex flex-wrap justify-content-around"
              >
                <CheckOperators />
              </fieldset>
            </div>
            <div>
              <ButtonSearch />
            </div>
          </div>
        </div>

        <div className="m-auto">
          <button className="mb-5" style={closeBtnStyle} onClick={onClose}>
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
