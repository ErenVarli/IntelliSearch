import React from "react";
import InputTextType from "../FormElements/InputTextType";

const CombinedOperators: React.FC = () => {

    const combinedOperators = [
        { label: "multiple-specific-terms-in-url", text: "Multiple specific terms in URL" },
        { label: "multiple-specific-terms-in-title", text: "Multiple specific terms in title" },
        { label: "multiple-specific-terms-in-page", text: "Multiple specific terms in page" },
    ];

    return (
        <>
            {combinedOperators.map((input, index) => (
                <InputTextType key={index} label={input.label} text={input.text} /> 
            ))}
        </>
    )
}
export default CombinedOperators;