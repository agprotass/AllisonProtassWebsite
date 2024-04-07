// DecorNav.tsx
import React, { useState, useEffect } from "react";
import OddButton from "./OddButton";
import "./OddShapedButton.css"; // Import CSS file

const DecorNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="decor-nav-container">
      <img
        src="/images/room_website_background.png"
        alt="Room website background"
      />
      <div className="decor-nav-container">
        <OddButton
          btnImage="/images/room_website_edu.png"
          onClick={() => handleClick("edu-section")}
          className={`bookshelf-button ${
            activeSection === "edu-section" ? "active" : ""
          }`}
        />
        <OddButton
          btnImage="/images/room_website_events.png"
          onClick={() => handleClick("events-section")}
          className={`poster-button ${
            activeSection === "events-section" ? "active" : ""
          }`}
        />
        <OddButton
          btnImage="/images/room_website_projects.png"
          onClick={() => handleClick("projects-section")}
          className={`desk-button ${
            activeSection === "projects-section" ? "active" : ""
          }`}
        />
        <OddButton
          btnImage="/images/room_website_work.png"
          onClick={() => handleClick("work-section")}
          className={`work-button ${
            activeSection === "work-section" ? "active" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default DecorNav;
