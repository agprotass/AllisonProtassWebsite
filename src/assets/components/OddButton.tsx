// OddButton.tsx
import React from "react";
import "./OddShapedButton.css";

interface Props {
  btnImage: string;
  onClick: () => void;
  className?: string;
  pageType?: string;
}

const OddButton: React.FC<Props> = ({
  btnImage,
  className,
  onClick,
  pageType,
}) => {
  return (
    <button onClick={onClick} className={`odd-shaped-button ${className}`}>
      <img src={btnImage} alt="Button" />
    </button>
  );
};

export default OddButton;
