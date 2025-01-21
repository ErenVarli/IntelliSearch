import React from "react";
import InputDateType from "../FormElements/InputDateType";

const DateOperators: React.FC = () => {

    const dateInputs = [
        { label: "before-date", text: "Rechercher les résultats datant avant le" },
        { label: "after-date", text: "Rechercher les résultats datant après le" },
    ];

    return (
        <div className="operator-box">
            {dateInputs.map((input, index) => (
                <InputDateType key={index} label={input.label} text={input.text}/>
            ))}
        </div>
    )
}
export default DateOperators