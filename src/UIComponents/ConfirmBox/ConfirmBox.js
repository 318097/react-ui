import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import "./ConfirmBox.scss";

const ConfirmBox = ({ children, title, onConfirm, onCancel, position }) => {
  const [showConfirmBox, setShowConfirmBox] = useState(false);

  const handleOk = () => {
    setShowConfirmBox(false);
    onConfirm();
  };

  const handleCancel = () => {
    setShowConfirmBox(false);
    if (onCancel) onCancel();
  };

  const popoverPosition = position === "center" ? "0px" : "calc(100% + 4px)";

  return (
    <span className="relative">
      <span onClick={() => setShowConfirmBox(true)}>{children}</span>
      {showConfirmBox && (
        <div
          className="confirm-box-container"
          style={{ right: popoverPosition }}
        >
          <span className="confirm-box-title">{title}</span>
          <span className="confirm-box-actions">
            <Button size="sm" onClick={handleOk}>
              Yes
            </Button>
            <Button size="sm" onClick={handleCancel}>
              No
            </Button>
          </span>
        </div>
      )}
    </span>
  );
};

ConfirmBox.defaultProps = {
  title: "Delete?",
  position: "center",
};

ConfirmBox.propTypes = {
  title: PropTypes.string,
  position: PropTypes.string,
};

export default ConfirmBox;
