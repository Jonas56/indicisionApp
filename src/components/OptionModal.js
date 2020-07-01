import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="selectedOption"
    onRequestClose={props.handleClearSelectedOption}
    closeTimeoutMS={100}
    className="modal"
  >
    <h1 className="modal__title">Selected Option : </h1>
    <h3 className="modal__body">
      {!!props.selectedOption && <p>{props.selectedOption}</p>}{" "}
    </h3>
    <button className="button" onClick={props.handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);
export default OptionModal;
