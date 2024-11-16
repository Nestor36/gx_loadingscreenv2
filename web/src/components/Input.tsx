import React from "react";

import "./style/Input.css";

type Props = {
  title?: string;
  description?: string;
  placeholder?: string;
  name?: string;
  style?: {
    width?: string;
  };
};

function Input({ title, description, name, placeholder, style }: Props) {
  const titleStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "start",
    paddingLeft: "10%",
    margin: "0",
    marginBottom: "-2px",
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#a1a1aa",
    margin: "0",
    marginBottom: "-5px",
    textAlign: "start",
    paddingLeft: "10%",
    paddingBottom: "2%",
  };

  const inputStyle: React.CSSProperties = {
    maxWidth: style?.width,
    justifyContent: "center",
  };

  return (
    <div style={inputStyle} className="input-container">
      <h2 style={titleStyle}>{title}</h2>
      <p style={descriptionStyle}>{description}</p>
      <input
        className="input"
        name={name}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
