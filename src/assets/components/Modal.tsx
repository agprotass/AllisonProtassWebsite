import React, { useEffect } from "react";
import * as bootstrap from "bootstrap";
import Carousel from "./Carousel";

interface Props {
  eventName: string;
  eventSummary: string;
  eventDate: string;
  eventPhotos?: Array<string>;
}

const Modal: React.FC<Props> = ({
  eventName,
  eventSummary,
  eventDate,
  eventPhotos,
}) => {
  useEffect(() => {
    const modalElement = document.getElementById("myModal");

    // Check if modalElement exists before creating modal instance
    if (modalElement) {
      const myModal = new bootstrap.Modal(modalElement, {});

      // Show the modal
      //myModal.show();

      // Cleanup on unmount
      return () => {
        myModal.dispose(); // Dispose the modal instance when the component unmounts
      };
    }
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="modal" id="myModal" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{eventName}<br /><small>{eventDate}</small></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex flex-column align-items-center">
            {eventPhotos && <Carousel eventPhotos={eventPhotos} />}
            <p>{eventSummary}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
