import React, { useState } from "react";
import Events from "./Events";
import Modal from "./Modal";

interface EventData {
  eventName: string;
  eventSummary: string;
  eventDate: string;
}

const EventParent = () => {
  const [modalContent, setModalContent] = useState<EventData>({
    eventName: "",
    eventSummary: "",
    eventDate: "",
  });

  const handleEventClick = (eventData: EventData) => {
    setModalContent(eventData);
  };

  return (
    <section id="events-section">
      <div>
        <Events onEventClick={handleEventClick} />
        <Modal {...modalContent} />
      </div>
    </section>
  );
};

export default EventParent;
