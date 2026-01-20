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
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("ariaLabel");

  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Logo />
        <button
          className={css.menuBtn}
          type="button"
          aria-label={t("menuBtn")}>
          <svg
            width={48}
            height={48}>
            <use href="/icons.svg#menu"></use>
          </svg>
        </button>

        <BurgerMenu isOpen={isMenuOpen} />

        <Navigation />
        <Address />

        <div className={css.headerRightBox}>
          <div className={css.toggleBtnBox}>
            <ToggleThemeBtn />
            <ToggleLanguageBtn />
          </div>

          <AuthButtons />
        </div>
      </div>
    </header>
  );
}
