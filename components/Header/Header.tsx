"use client";

import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { usePathname } from "next/navigation";

export default function Header({ locale }: { locale: string }) {
  const { t } = useTranslation("common");
  const pathname = usePathname();

  // Визначаємо іншу мову
  const otherLocale = locale === "uk" ? "en" : "uk";

  // Формуємо новий шлях з іншою локаллю
  const switchPath = `/${otherLocale}${pathname.replace(/^\/[a-z]{2}/, "")}`;

  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Logo />

        <button className={css.menuBtn} type="button">
          <svg width={48} height={48}>
            <use href="/icons.svg#menu"></use>
          </svg>
        </button>

        <nav className={css.navigationBox}>
          <Link className={css.linkNav} href="/">
            {t("Prices")}
          </Link>
          <Link className={css.linkNav} href="/">
            {t("Project")}
          </Link>
        </nav>

        <address className={css.addressBox}>
          <Link className={css.linkAddress} href="/">
            <svg width={24} height={24}>
              <use href="/icons.svg#phone"></use>
            </svg>
          </Link>
          <Link className={css.linkAddress} href="/">
            <svg width={24} height={24}>
              <use href="/icons.svg#mail"></use>
            </svg>
          </Link>
          <Link className={css.linkAddress} href="/">
            <svg width={24} height={24}>
              <use href="/icons.svg#telegram"></use>
            </svg>
          </Link>
          <Link className={css.linkAddress} href="/">
            <svg width={24} height={24}>
              <use href="/icons.svg#whatsapp"></use>
            </svg>
          </Link>
          <Link className={css.linkAddress} href="/">
            <svg width={24} height={24}>
              <use href="/icons.svg#instagram"></use>
            </svg>
          </Link>
        </address>

        <div className={css.langSwitcher}>
          <Link href={switchPath} className={css.linkNav}>
            {otherLocale.toUpperCase()}
          </Link>
        </div>
      </div>
    </header>
  );
}
