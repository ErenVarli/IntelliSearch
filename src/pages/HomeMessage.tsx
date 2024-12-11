import React from "react";
import Title from "../components/Titles/H/Titles";

const introHomePageStyle = {
  width: "40vw",
  margin: "auto",
  marginTop: 100,
  textAlign: "center" as "center",
};

const marginImg = {
  marginBottom: 30,
};

const marginParagraph = {
  marginTop: -20,
};

const HomeMessage: React.FC = () => {
  return (
    <>
      <div style={introHomePageStyle} className="introduction-text" id="introduction-text">
        <img
          src="https://evarli.com/wp-content/uploads/2024/05/AspasLogo-Blue-e1716043121658.png"
          alt="Evarli Logo"
          width={75}
          height={110}
          style={marginImg}
        />
        <Title variante="h3" label="IntelliSearch"></Title>
        <p style={marginParagraph}>
          Explore the darkest corners of the Internet with a state-of-the-art
          tool designed for professionals and enthusiasts alike.
        </p>
      </div>
    </>
  );
};

export default HomeMessage;
