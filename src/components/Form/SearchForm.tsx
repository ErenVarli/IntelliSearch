import Title from "../Titles/H/Titles";
import CheckOperators from "../Operators/CheckOperators";
import EssentialOperators from "../Operators/EssentialOperators";
import CombinedOperators from "../Operators/CombinedOperators";
import DateOperators from "../Operators/DatesOperators";
import HeaderForm from "./Header";
import ButtonSearch from "../Buttons/ButtonSearch";
import ButtonClose from "../Buttons/ButtonClose";

const formStyle = {
  width: "95%",
  height: "100%",
};

const boxWidth = {
  width: "100%",
};

const fieldsetStyle = {
  margin: "auto",
  borderRadius: "10px",
  padding: "15px",
  backgroundColor: "#293140",
  color: "white",
};

const SearchForm: React.FC = () => {
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
                style={fieldsetStyle}
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
          <ButtonClose />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
