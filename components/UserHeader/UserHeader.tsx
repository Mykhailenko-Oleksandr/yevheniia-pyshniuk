"use client";

import { User } from "@/types/user";
import css from "./UserHeader.module.css";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState } from "react";

interface UserHeaderProps {
  user: User;
}

export default function UserHeader({ user }: UserHeaderProps) {
  const [isLogoutModal, setIsLogoutOpen] = useState(false);

  return (
    <div className={css.box}>
      <Link href="/profile" className={css.link}>
        <Image
          src={user.avatar}
          alt="Avatar"
          width={37}
          height={37}
          className={css.img}
        />
        <span className={css.userName}>{user.firstName}</span>
      </Link>

      <div className={css.line}></div>

      <button
        type="button"
        className={css.logoutBtn}
        onClick={() => setIsLogoutOpen(true)}
        aria-label="Вийти"
      >
        <svg width="18" height="18">
          <use href="/icons.svg#icon-logout" />
        </svg>
      </button>
    </div>
  );
}
