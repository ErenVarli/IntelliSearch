import React from "react";

interface titlesProps {
  variante?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  label?: string;
  className?: string;
}

const titleStyle = {
  color: "#375FAC",
};

const titleStyleH2 = {
  color: "#375FAC",
  fontSize: 27,
  fontWeight: 600,
  marginTop: -25,
  marginBottom: 25,
};

const titleStyleH3 = {
  color: "#05070E",
  fontSize: 27,
  fontWeight: 300,
  marginTop: -25,
  marginBottom: 25,
};

const titleStyleH4 = {
  color: "#375FAC",
  fontSize: 18,
  fontWeight: 600,
};

const Title: React.FC<titlesProps> = ({ variante, label, className }) => {
  if (variante == "h1") {
    return (
      <h1 className={className} style={titleStyle}>
        {label}
      </h1>
    );
  }
  if (variante == "h2") {
    return (
      <h2 className={className} style={titleStyleH2}>
        {label}
      </h2>
    );
  }
  if (variante == "h3") {
    return (
      <h3 className={className} style={titleStyleH3}>
        {label}
      </h3>
    );
  }
  if (variante == "h4") {
    return (
      <h4 className={className} style={titleStyleH4}>
        {label}
      </h4>
    );
  }
  if (variante == "h5") {
    return (
      <h5 className={className} style={titleStyle}>
        {label}
      </h5>
    );
  }
  if (variante == "h6") {
    return (
      <h6 className={className} style={titleStyle}>
        {label}
      </h6>
    );
  }
};

export default Title;
