"use client";

import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import { useTranslations } from "next-intl";
import Navigation from "../Navigation/Navigation";
import Address from "../Address/Address";
import ToggleLanguageBtn from "../ToggleLanguageBtn/ToggleLanguageBtn";
import ToggleThemeBtn from "../ToggleThemeBtn/ToggleThemeBtn";
import AuthButtons from "../AuthButtons/AuthButtons";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useEffect, useState } from "react";
import ToggleButtons from "../ToggleButtons/ToggleButtons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = useTranslations("ariaLabel");

  function openCloseMenu() {
    if (isMenuOpen) {
      closeMenu();
      return;
    }

    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    document.body.classList.toggle("noScroll", isMenuOpen);
    return () => document.body.classList.remove("noScroll");
  }, [isMenuOpen]);

  useEffect(() => {
    const onEsc = (event: KeyboardEvent) =>
      event.key === "Escape" && closeMenu();

    if (isMenuOpen) window.addEventListener("keydown", onEsc);

    return () => window.removeEventListener("keydown", onEsc);
  }, [isMenuOpen]);

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     console.dir(event);
  //  if (

  //  isMenuOpen &&
  //  menuRef.current &&
  //  !menuRef.current.contains(event.target as Node) &&
  //  burgerRef.current &&
  //  !burgerRef.current.contains(event.target as Node)
  //    ) {
  //      closeMenu();
  //    }
  // };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, [isMenuOpen]);

  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Logo />
        <button
          className={css.menuBtn}
          type="button"
          aria-label={t("menuBtn")}
          onClick={openCloseMenu}
        >
          <svg width={48} height={48}>
            {isMenuOpen ? (
              <use href="/icons.svg#close"></use>
            ) : (
              <use href="/icons.svg#menu"></use>
            )}
          </svg>
        </button>

        <BurgerMenu isOpen={isMenuOpen} />

        <Navigation />
        <Address />

        <div className={css.headerRightBox}>
          <ToggleButtons />
          <AuthButtons />
        </div>
      </div>
    </header>
  );
}
