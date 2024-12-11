import React from "react";
import "reactjs-popup/dist/index.css";
import SearchForm from "../Form/SearchForm";

interface PopupProps {
  onClose: () => void;
}

const SearchFormPopup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <div>
      <div>
        <SearchForm onClose={onClose} />
      </div>
    </div>
  );
};

export default SearchFormPopup;
