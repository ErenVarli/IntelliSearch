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
  fontSize: 10,
  width: "60%",
  margin: "auto",
};

const colorBlueDark = {
  color: "#212529",
  fontWeight: 400,
};

const colorBlueLight = {
  color: "#375FAC",
  fontWeight: 400,
};

const marginBeta = {
  marginTop: 22,
};

const marginTitle = {
  width: "min-content",
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
            src="https://evarli.com/wp-content/uploads/2024/05/AspasLogo-Blue-e1716043121658.png"
            alt="Logo Evarli"
            width={22}
            height={32}
            style={marginLogoEvarli}
          />
          <h1 style={colorBlueDark}>
            Intelli<span style={colorBlueLight}>Search</span>
          </h1>
          <span style={marginBeta}>isv2</span>
        </div>
        <p id="intro-style-paragraph" style={introStyleParagraph}>
          For educational and research purposes only. Not to be used for
          malicious or illegal purposes. Liability disclaimed for any violation
          of laws or regulations.
        </p>
        <ButtonClearFilter />
      </div>
    </>
  );
};

export default HeaderForm;
