import React from 'react'
import "./CustomButton.css";
import { Button } from "@material-ui/core";

const CustomButton = ({ text, icon, submitfunction }) => {

  return (
    <Button
      className="site_btn"
      onClick={submitfunction}
      endIcon={
        icon ? (
          <div className="icon_container">
              {icon}
          </div>
        ) : null
      }
    >
      <span className="button_text">{text}</span>
    </Button>
  );
};

export default CustomButton;