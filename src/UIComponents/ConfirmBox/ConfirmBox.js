import React, { useState } from "react";
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
    <span style={{ position: "relative" }}>
      <span onClick={() => setShowConfirmBox(true)}>{children}</span>
      {showConfirmBox && (
        <div
          className="confirm-box-container"
          style={{ right: popoverPosition }}
        >
          <span className="confirm-box-title">{title}</span>
          <span className="confirm-box-actions">
            <button onClick={handleOk} className="btn">
              Yes
            </button>
            <button onClick={handleCancel} className="btn">
              No
            </button>
          </span>
        </div>
      )}
    </span>
  );
};

export default ConfirmBox;

ConfirmBox.defaultProps = {
  title: "Delete?",
  position: "center",
};
