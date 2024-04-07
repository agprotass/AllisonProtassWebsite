import React from "react";
import "./EduStyle.css";

interface Props {
  degreeType: string;
  distinction?: string;
  gradDate: string;
  schoolName: string;
}

const EduComponent: React.FC<Props> = ({
  degreeType,
  distinction,
  gradDate,
  schoolName,
}) => {
  return (
    <div className="edu-component">
      <strong>{degreeType}</strong>
      <div>
        {schoolName} — {gradDate}
      </div>
      <em>{distinction}</em>
    </div>
  );
};

export default EduComponent;
