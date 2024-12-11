import React, { useState } from "react";
import { showPopup } from "../../actions/DisplayPopup";
import SearchFormPopup from "../Popup/SearchFormPopup";

const ButtonFilter: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
    showPopup();
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpenPopup}
        type="button"
        id="popup-button"
        className="btn"
      >
  {/*
        <svg width="25" height="25" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FFFFFF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Filter</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Filter"> <rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="24" height="24"> </rect> <line x1="4" y1="5" x2="16" y2="5" id="Path" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"> </line> <line x1="4" y1="12" x2="10" y2="12" id="Path" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"> </line> <line x1="14" y1="12" x2="20" y2="12" id="Path" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"> </line> <line x1="8" y1="19" x2="20" y2="19" id="Path" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"> </line> <circle id="Oval" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" cx="18" cy="5" r="2"> </circle> <circle id="Oval" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" cx="12" cy="12" r="2"> </circle> <circle id="Oval" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" cx="6" cy="19" r="2"> </circle> </g> </g> </g></svg> 
 */}      
 Hacking
 </button>
      {isPopupOpen && <SearchFormPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default ButtonFilter;
