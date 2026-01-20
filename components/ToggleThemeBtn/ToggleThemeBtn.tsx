"use client";

import clsx from "clsx";
import css from "./ToggleThemeBtn.module.css";
import { useState } from "react";

export default function ToggleThemeBtn() {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark(!dark);
  }

  return (
    <button
      className={clsx(css.themeBtn, dark && css.darkBtn)}
      type="button"
      onClick={toggleTheme}
    >
      <svg width={20} height={20}>
        {dark ? (
          <use href="/icons.svg#sunny"></use>
        ) : (
          <use href="/icons.svg#moon"></use>
        )}
      </svg>
    </button>
  );
}
