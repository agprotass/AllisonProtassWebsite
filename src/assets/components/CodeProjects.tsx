import React from "react";
import Nutty from "./Nutty";
import "./CodeProjects.css"; // Import CSS file for styling

const CodeProjects = () => {
  return (
    <section id="projects-section" className="centered">
      <div className="content">
        <h1>CODE PROJECTS</h1>
        <Nutty />
      </div>
    </section>
  );
};

export default CodeProjects;
