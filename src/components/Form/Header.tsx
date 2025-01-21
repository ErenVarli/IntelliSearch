import React from "react";
import ButtonClearFilter from "../Buttons/ButtonClearFilter";

interface headerProps {
  label?: string;
  type?: string;
  text?: string;
}

const introStyle = {
  width: "60vw",
  margin: "auto",
};

const introStyleParagraph = {
  fontSize: 14,
  width: "60%",
  margin: "auto",
  color: "#FFFFFF",
};

const colorLight = {
  color: "#FFFFFF" /*exceptionnellement light*/,
  fontWeight: 400,
};

const colorBlueLight = {
  color: "#375FAC",
  fontWeight: 400,
};

const spanStyle = {
  marginTop: 22,
  color: "#FFFFFF",
};

const marginTitle = {
  width: "max-content",
  margin: "auto",
};

const marginLogoEvarli = {
  marginTop: 12,
  marginRight: 7,
};

const HeaderForm: React.FC<headerProps> = ({}) => {
  return (
    <>
      <div
        className="text-center header-container p-5 pt-4 pb-2"
        style={introStyle}
      >
        <div id="popup-header" className="d-flex flex-row" style={marginTitle}>
          <img
            src="icon_evarli_light.png"
            alt="Logo Evarli"
            width={22}
            height={32}
            style={marginLogoEvarli}
          />
          <h1 style={colorLight}>
            Intelli<span style={colorBlueLight}>Search</span>
          </h1>
          <span style={spanStyle}>Delta</span>
        </div>
        <p id="intro-style-paragraph" style={introStyleParagraph}>
          <i>
            À des fins éducatives et de recherche uniquement. Ne pas utiliser à
            des fins malveillantes ou illégales. Toute responsabilité est exclue
            en cas de violation des lois ou des règlements.
          </i>
        </p>
        <ButtonClearFilter />
      </div>
    </>
  );
};

export default HeaderForm;
