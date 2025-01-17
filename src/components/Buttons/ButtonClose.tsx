import Button from "react-bootstrap/Button";
import { displayPopup } from "../../actions/DisplayPopup";
import { hideHomeMessage } from "../../actions/HideHomeMessage";

const buttonStyle = {
  width: "max-content",
  marginBottom: 30,
  float: "right" as const,
  backgroundColor: "#FFFFFF",
  borderRadius: "5px",
};

const ButtonClose: React.FC = () => {

  const handleClosePopup = () => {
    displayPopup(false);
    hideHomeMessage(true)
  };

  return (
    <div style={buttonStyle}>
      <Button
        id="close-btn"
        variant="none"
        className="text-dark"
        onClick = {handleClosePopup}
      >
        Close
      </Button>
    </div>
  );
};

export default ButtonClose;