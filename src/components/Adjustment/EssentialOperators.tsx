import React from "react";
import InputTextType from "../FormElements/InputTextType";

const EssentialOperators: React.FC = () => {

    const essentialOperators = [
        { label: "targeted-sentence", text: "Targeted sentence" },
        { label: "terms-to-exclude", text: "Terms to exclude" },
        { label: "targeted-domain-name", text: "Targeted domain name" },
        { label: "similar-sites", text: "Similar sites" },
        { label: "specific-term-in-the-url", text: "Specific term in the URL" },
        { label: "specific-term-in-the-title", text: "Specific term in the title" },
        { label: "specific-term-in-the-page", text: "Specific term in the page" },
        { label: "least-one-specified-terms", text: "At least one of the specified terms (min: 2)" },
        { label: "required-terms", text: "Required terms in results (min: 2)" },
    ];

    return (
        <>
            {essentialOperators.map((input, index) => (
                <InputTextType key={index} label={input.label} text={input.text} /> 
            ))}
        </>
    )
}
export default EssentialOperators