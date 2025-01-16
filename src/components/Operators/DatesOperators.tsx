import React from "react";
import InputDateType from "../FormElements/InputDateType";

const DateOperators: React.FC = () => {

    const dateInputs = [
        { label: "before-date", text: "Results dating before" },
        { label: "after-date", text: "Results dating after" },
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