import React from "react";
import Button from "../components/Button";
import "./style/alertDialog.css";
import "../imports/animate.css";

type Props = {
  header?: string;
  content: string;
  label?: {
    confirm?: string;
    cancel?: string;
  };
};

function alertDialog({ content, header, label }: Props) {
  const handleClick = (isConfirm: boolean) => {
    if (!isConfirm) {
    }
    console.log(isConfirm);
  };

  return (
    <div className="brutalist-card fadeIn">
      <div className="brutalist-card__header">
        <div className="brutalist-card__icon">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
          </svg>
        </div>
        <div className="brutalist-card__alert">{header}</div>
      </div>
      <div className="brutalist-card__message">{content}</div>
      <div className="brutalist-card__actions">
        <Button
          label={label?.confirm || "confirm"}
          onClick={() => handleClick(true)}
          type="confirm"
        ></Button>
        <span style={{ padding: "10px" }}></span>
        <Button
          label={label?.cancel || "cancel"}
          onClick={() => handleClick(false)}
          type="cancel"
        ></Button>
      </div>
    </div>
  );
}

export default alertDialog;
