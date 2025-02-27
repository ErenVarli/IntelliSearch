import React, { useState } from "react";
import { displayPopup } from "../../actions/DisplayPopup";
import SearchForm from "../Form/SearchForm";
import { hideHomeMessage } from "../../actions/HideHomeMessage";

const ButtonFilter: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
    displayPopup(true);
    hideHomeMessage(true);
  };

  return (
    <div>
      <button
        onClick={handleOpenPopup}
        type="button"
        id="popup-button"
        className="btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="#FFFFFF"
            d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
          />
        </svg>
      </button>
      {isPopupOpen && <SearchForm />}
    </div>
  );
};

export default ButtonFilter;
