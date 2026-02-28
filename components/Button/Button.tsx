"use client";

import css from "./Button.module.css";

interface ButtonProps {
  type: "button" | "submit";
  onClick?: () => void;
  text: string;
}

export default function Button({ type, onClick, text }: ButtonProps) {
  return (
    <button type={type} className={css.btn} onClick={onClick}>
      {text}
    </button>
  );
}
