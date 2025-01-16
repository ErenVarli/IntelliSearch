import React from "react";
import InputCheckType from "../FormElements/InputCheckType";

const CheckOperators: React.FC = () => {

    const checkInputsSerie1 = ["PDF", "DOC", "DOCX", "PPT"];
    const checkInputsSerie2 = ["PPTX", "XLS", "XLSX", "JSON"];
    const checkInputsSerie3 = ["TXT", "CSV", "XML", "HTML"];
    const checkInputsSerie4 = ["HTM", "ODS", "ODT", "SVG"];

    return (
        <div className="operator-box">
            <div className="check-box">
                {checkInputsSerie1.map((input, index) => (
                        <InputCheckType key={index} label={input} />
                ))}
            </div>
            <div className="check-box">
                {checkInputsSerie2.map((input, index) => (
                        <InputCheckType key={index} label={input} />
                ))}
            </div>      
            <div className="check-box">
                {checkInputsSerie3.map((input, index) => (
                        <InputCheckType key={index} label={input} />
                ))}
            </div>      
            <div className="check-box">
                {checkInputsSerie4.map((input, index) => (
                        <InputCheckType key={index} label={input} />
                ))}
            </div>
        </div>
    )
}
export default CheckOperators