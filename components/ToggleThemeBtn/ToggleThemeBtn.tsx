"use client";

import clsx from "clsx";
import css from "./ToggleThemeBtn.module.css";
import { useState } from "react";

interface ToggleThemeBtnProps {
  isMenu?: boolean;
}

export default function ToggleThemeBtn({ isMenu }: ToggleThemeBtnProps) {
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark(!dark);
  }

  return (
    <button
      className={clsx(css.themeBtn, dark && css.darkBtn, isMenu && css.menu)}
      type="button"
      onClick={toggleTheme}
    >
      <svg width={22} height={22}>
        {dark ? (
          <use href="/icons.svg#sunny"></use>
        ) : (
          <use href="/icons.svg#moon"></use>
        )}
      </svg>
    </button>
  );
}
