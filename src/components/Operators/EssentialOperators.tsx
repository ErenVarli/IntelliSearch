import React from "react";
import InputTextType from "../FormElements/InputTextType";

const EssentialOperators: React.FC = () => {
    const essentialOperators = [
        { label: "targeted-sentence", text: "Phrase spécifique à rechercher" },
        { label: "terms-to-exclude", text: "Termes à exclure des résultats" },
        { label: "targeted-domain-name", text: "Résultats avec ce nom de domaine uniquement" },
        { label: "similar-sites", text: "Sites similaires" },
        { label: "specific-term-in-the-url", text: "Mots spécifiques dans l'URL" },
        { label: "specific-term-in-the-title", text: "Mots spécifiques dans le titre" },
        { label: "specific-term-in-the-page", text: "Mots spécifiques dans la page" },
        { label: "least-one-specified-terms", text: "Au moins un de ces termes (2 minimum)" },
        { label: "required-terms", text: "Termes requis dans les résultats (2 minimum)" }
    ];

    return (
        <div className="operator-box">
            {essentialOperators.map((input, index) => (
                <InputTextType key={index} label={input.label} text={input.text} /> 
            ))}
        </div>
    )
}
export default EssentialOperators