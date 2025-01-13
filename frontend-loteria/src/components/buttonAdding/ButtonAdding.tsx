import React from "react";
import "./ButtonAdding.css";

interface AddingButtonProps {
  isDisabled: boolean;
  label: string;
  onClick: () => void
}

const AddingButton: React.FC<AddingButtonProps> = ({ isDisabled, label, onClick}) => {
  return (
    <button className="addButton" disabled={isDisabled} onClick={onClick}>
      {label}
    </button>
  );
};

export default AddingButton;
