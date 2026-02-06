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
import Modal from "../Modal/Modal";
import { logout } from "@/lib/api/clientApi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, isAuthenticated, clearIsAuthenticated } = useAuthStore();

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

  async function handlerLogout() {
    await logout();
    clearIsAuthenticated();
    setIsModalOpen(false);
    closeMenu();
  }

  return (
    <>
      <header className={css.header}>
        <div className={`container ${css.headerContainer}`}>
          <Logo closeMenu={closeMenu} />

          <Navigation closeMenu={closeMenu} />
          <Address />

          <div className={css.headerRightBox}>
            <ToggleButtons />

            {user && isAuthenticated ? (
              <UserHeader user={user} openModal={() => setIsModalOpen(true)} />
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

          <BurgerMenu
            isOpen={isMenuOpen}
            closeMenu={closeMenu}
            user={user}
            isAuthenticated
            openModal={() => setIsModalOpen(true)}
          />
        </div>
      </header>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handlerLogout}
        />
      )}
    </>
  );
}
