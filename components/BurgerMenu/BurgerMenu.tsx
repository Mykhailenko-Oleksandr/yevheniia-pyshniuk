"use client";

import clsx from "clsx";
import css from "./BurgerMenu.module.css";
import Navigation from "../Navigation/Navigation";
import Address from "../Address/Address";
import ToggleButtons from "../ToggleButtons/ToggleButtons";
import { MouseEvent, useEffect, useRef } from "react";
import AuthButtons from "../AuthButtons/AuthButtons";
import { User } from "@/types/user";
import UserHeader from "../UserHeader/UserHeader";

interface BurgerMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
  user: User | null;
  isAuthenticated: boolean;
  openModal: () => void;
}

export default function BurgerMenu({
  isOpen,
  closeMenu,
  user,
  isAuthenticated,
  openModal,
}: BurgerMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  function handleClickBackdrop(event: MouseEvent<HTMLDivElement>) {
    if (event.target === menuRef.current) {
      closeMenu();
    }
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) closeMenu();
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [closeMenu]);

  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }

    if (isOpen) {
      document.body.classList.add("noScroll");
      window.addEventListener("keydown", onEsc);
    } else {
      document.body.classList.remove("noScroll");
    }

    return () => {
      document.body.classList.remove("noScroll");
      window.removeEventListener("keydown", onEsc);
    };
  }, [isOpen, closeMenu]);

  return (
    <div
      ref={menuRef}
      className={clsx(css.backdrop, isOpen && css.isOpen)}
      onClick={handleClickBackdrop}
    >
      <div className={css.menu}>
        <Navigation isMenu={isOpen} closeMenu={closeMenu} />
        <Address isMenu={isOpen} />
        <ToggleButtons isMenu={isOpen} />

        {user && isAuthenticated ? (
          <UserHeader
            isMenu={isOpen}
            user={user}
            openModal={openModal}
            closeMenu={closeMenu}
          />
        ) : (
          <AuthButtons isMenu={isOpen} closeMenu={closeMenu} />
        )}
      </div>
    </div>
  );
}
