import React from "react";
import Title from "../components/Titles/H/Titles";

const introHomePageStyle = {
  width: "40vw",
  margin: "auto",
  marginTop: 100,
  textAlign: "center" as "center",
};

const marginImg = {
  marginBottom: 40,
};

const introStyle = {
  marginTop: -20,
  color: "#C1C1C1",
};

const startMessage = {
  fontSize: 25,
  color: "#C1C1C1",
};

const HomeMessage: React.FC = () => {
  return (
    <>
      <div
        style={introHomePageStyle}
        className="introduction-text"
        id="introduction-text"
      >
        <img
          src="./icon_evarli_light.png"
          alt="Evarli Logo"
          width={80}
          height={110}
          style={marginImg}
        />
        <Title variante="h3" label="IntelliSearch Delta"></Title>
        <p style={introStyle}>
          Plongez dans les profondeurs les plus mystérieuses d'Internet avec un
          outil conçu pour tous les curieux, amateurs et cyber détectives.
        </p>
        <p id="start-message" style={startMessage}>
          <i>Utilisez le dynamic island pour effectuer vos recherches...</i>
        </p>
      </div>
    </>
  );
};

export default HomeMessage;
