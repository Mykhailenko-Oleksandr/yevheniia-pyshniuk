"use client";

import { User } from "@/types/user";
import css from "./UserHeader.module.css";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import clsx from "clsx";
import { useTranslations } from "next-intl";

interface UserHeaderProps {
  user: User;
  openModal: () => void;
  closeMenu: () => void;
  isMenu?: boolean;
}

export default function UserHeader({
  user,
  openModal,
  closeMenu,
  isMenu,
}: UserHeaderProps) {
  const tAriaLabel = useTranslations("ariaLabel");
  const t = useTranslations("userHeader");

  return (
    <>
      <div className={css.box} onClick={closeMenu}>
        <Link href="/profile" className={css.link}>
          <Image
            src={user.avatar}
            alt={t("altImg")}
            width={37}
            height={37}
            className={clsx(css.img, isMenu && css.menuImg)}
          />
          <span className={clsx(css.userName, isMenu && css.menuName)}>
            {user.firstName}
          </span>
        </Link>

        <div className={clsx(css.line, isMenu && css.menuLine)}></div>

        <button
          type="button"
          className={css.logoutBtn}
          onClick={openModal}
          aria-label={tAriaLabel("logoutBtn")}
        >
          <svg width="30" height="30">
            <use href="/icons.svg#logout" />
          </svg>
        </button>
      </div>
    </>
  );
}
