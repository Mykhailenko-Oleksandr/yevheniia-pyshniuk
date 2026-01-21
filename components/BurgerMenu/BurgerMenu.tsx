"use client";

import clsx from "clsx";
import css from "./BurgerMenu.module.css";
import Navigation from "../Navigation/Navigation";
import Address from "../Address/Address";
import ToggleButtons from "../ToggleButtons/ToggleButtons";
import { MouseEvent, useEffect, useRef } from "react";
import AuthButtons from "../AuthButtons/AuthButtons";

interface BurgerMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function BurgerMenu({ isOpen, closeMenu }: BurgerMenuProps) {
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
      document.body.classList.add("no-scroll");
      window.addEventListener("keydown", onEsc);
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
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
        <AuthButtons isMenu={isOpen} closeMenu={closeMenu} />
      </div>
    </div>
  );
}
