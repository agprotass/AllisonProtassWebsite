// App.tsx
import React from "react";
import Navbar from "./assets/components/Navbar";
import DecorNav from "./assets/components/DecorNav";
import Edu from "./assets/components/Edu";
import CodeProjects from "./assets/components/CodeProjects";
import Events from "./assets/components/Events";
import Modal from "./assets/components/Modal";
import EventParent from "./assets/components/EventParent";
import Nutty from "./assets/components/Nutty";
import Work from "./assets/components/Work";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <DecorNav />
      <br />
      <br />
      <br />
      <br />
      <Edu />
      <br />
      <br />
      <br />
      <br />
      <EventParent />
      <br />
      <br />
      <br />
      <br />
      <CodeProjects />
      <br />
      <br />
      <br />
      <br />
      <Work />
    </div>
  );
};

export default App;
