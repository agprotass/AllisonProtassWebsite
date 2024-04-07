import React from "react";
import EduComponent from "./EduComponent";
import "./EduStyle.css";

const Edu = () => {
  return (
    <section id="edu-section">
      <div>
        <h1>EDUCATION</h1>
        <br></br>
        <EduComponent
          degreeType={"Bachelor of Arts in English"}
          distinction={"Summa Cum Laude"}
          gradDate={"December 2023"}
          schoolName={"The University of Texas at Austin"}
        ></EduComponent>
        <br></br>
        <EduComponent
          degreeType={"Elements of Computing Certificate Program"}
          distinction={
            "Relevant Coursework: Software Design, Mobile Computing, Game Development, Graphics & Visualization, Web Programming"
          }
          gradDate={"December 2023"}
          schoolName={"The University of Texas at Austin"}
        ></EduComponent>
      </div>
    </section>
  );
};

export default Edu;
