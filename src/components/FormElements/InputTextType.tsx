import React from "react";

interface inputProps{
    label?: string;
    text?: string,
}

const InputTextType: React.FC<inputProps> = ({
    label, text
}) =>{
    return (
        <div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id={label} name={label} placeholder={text} />
                <label htmlFor="floatingInput">{text}</label>
            </div>
        </div>
    )
}
export default InputTextType