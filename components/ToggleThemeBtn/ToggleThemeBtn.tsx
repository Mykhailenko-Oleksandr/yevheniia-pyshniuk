"use client";

import clsx from "clsx";
import css from "./ToggleThemeBtn.module.css";
import { useEffect, useState } from "react";

interface ToggleThemeBtnProps {
  isMenu?: boolean;
}

export default function ToggleThemeBtn({ isMenu }: ToggleThemeBtnProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.body.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      localStorage.removeItem("theme");
      setIsDark(false);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      className={clsx(
        css.themeBtn,
        isDark && css.darkBtn,
        isMenu && css.menuBtn,
      )}
      type="button"
      onClick={toggleTheme}>
      <svg
        width={22}
        height={22}>
        {isDark ? (
          <use href="/icons.svg#sunny"></use>
        ) : (
          <use href="/icons.svg#moon"></use>
        )}
      </svg>
    </button>
  );
}
