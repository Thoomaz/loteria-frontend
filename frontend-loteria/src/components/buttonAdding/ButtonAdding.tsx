import React from "react";
import "./ButtonAdding.css";

interface AddingButtonProps {
  isDisabled: boolean;
  label: string;
}

const AddingButton: React.FC<AddingButtonProps> = ({ isDisabled, label }) => {
  return (
    <button className="addButton" disabled={isDisabled}>
      {label}
    </button>
  );
};

export default AddingButton;
