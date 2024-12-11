import React from "react";

interface dateInputProps{
    label?: string;
    type?: string;
    text?: string,
}

const InputDateType: React.FC<dateInputProps> = ({ label, text}) => {
  return (
    <>
      <div className="form-floating mb-3">
        <input type="date" className="form-control" id={label} name={label}
        />
        <label htmlFor={label}>{text}</label>
      </div>
    </>
  );
};

export default InputDateType;
