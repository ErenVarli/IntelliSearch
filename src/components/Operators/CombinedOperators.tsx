import React from "react";
import InputTextType from "../FormElements/InputTextType";

const CombinedOperators: React.FC = () => {
    const combinedOperators = [
        { label: "multiple-specific-terms-in-url", text: "Ces termes spécifiques dans l'URL" },
        { label: "multiple-specific-terms-in-title", text: "Ces termes spécifiques dans le titre" },
        { label: "multiple-specific-terms-in-page", text: "Ces termes spécifiques dans la page" }
    ];

    return (
        <div className="operator-box">
            {combinedOperators.map((input, index) => (
                <InputTextType key={index} label={input.label} text={input.text} /> 
            ))}
        </div>
    )
}
export default CombinedOperators;