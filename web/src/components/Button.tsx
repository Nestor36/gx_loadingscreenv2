import React from "react";
import "./style/button.css";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "cancel" | "confirm";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "cancel" }) => {
  // Define las clases CSS en función del tipo de botón
  const style =
    type === "confirm"
      ? "brutalist-card__button--mark"
      : "brutalist-card__button--read";

  return (
    <button onClick={onClick} className={`brutalist-card__button ${style}`}>
      {label}
    </button>
  );
};

export default Button;
