"use client";

import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import { useTranslations } from "next-intl";
import Navigation from "../Navigation/Navigation";
import Address from "../Address/Address";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState } from "react";
import ToggleButtons from "../ToggleButtons/ToggleButtons";
import AuthButtons from "../AuthButtons/AuthButtons";
import { useAuthStore } from "@/lib/store/authStore";
import UserHeader from "../UserHeader/UserHeader";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuthStore();

  const t = useTranslations("ariaLabel");

  function openCloseMenu() {
    if (isMenuOpen) {
      closeMenu();
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }
  console.log(user);

  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Logo closeMenu={closeMenu} />

        <Navigation closeMenu={closeMenu} />
        <Address />

        <div className={css.headerRightBox}>
          <ToggleButtons />

          {user ? (
            <UserHeader user={user} />
          ) : (
            <AuthButtons closeMenu={closeMenu} />
          )}
        </div>

        <button
          className={css.menuBtn}
          type="button"
          aria-label={t("menuBtn")}
          onClick={openCloseMenu}
        >
          <svg width={40} height={40}>
            {isMenuOpen ? (
              <use href="/icons.svg#close"></use>
            ) : (
              <use href="/icons.svg#menu"></use>
            )}
          </svg>
        </button>

        <BurgerMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
      </div>
    </header>
  );
}
