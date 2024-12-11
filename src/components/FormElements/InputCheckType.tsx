import React from "react";

interface inputProps{
    label?: string;
    children?: string,
}

const InputCheckType: React.FC<inputProps> = ({
    label
}) =>{
    return (
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value={label} id={label} name={label} />
                <label className="form-check-label" htmlFor={label}>{label}</label>
            </div>
    )
}
export default InputCheckType