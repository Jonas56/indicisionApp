import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <div className="widget_header">
      <h3 className="widget-header__title">Your Options : </h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>
    {props.options.length == 0 && (
      <p className="widget__message">Please add some Options!</p>
    )}
    {props.options.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        count={index}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);
export default Options;
