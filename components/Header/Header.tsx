"use client";

import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Navigation from "../Navigation/Navigation";
import Address from "../Address/Address";
import ToggleLanguageBtn from "../ToggleLanguageBtn/ToggleLanguageBtn";
import ToggleThemeBtn from "../ToggleThemeBtn/ToggleThemeBtn";

export default function Header() {
  const tAL = useTranslations("ariaLabel");
  const tAuth = useTranslations("auth");

  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Logo />
        <button
          className={css.menuBtn}
          type="button"
          aria-label={tAL("menuBtn")}
        >
          <svg width={48} height={48}>
            <use href="/icons.svg#menu"></use>
          </svg>
        </button>

        <Navigation />
        <Address />

        <div className={css.toggleBtnBox}>
          <ToggleThemeBtn />
          <ToggleLanguageBtn />
        </div>

        <div className={css.authBtnBox}>
          <Link href="/" className={css.authBtn}>
            {tAuth("login")}
          </Link>
          <Link href="/" className={css.registerBtn}>
            {tAuth("register")}
          </Link>
        </div>
      </div>
    </header>
  );
}
