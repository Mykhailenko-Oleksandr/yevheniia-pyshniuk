import { Link } from "@/i18n/navigation";
import css from "./Navigation.module.css";
import { useTranslations } from "next-intl";
import clsx from "clsx";

interface NavigationProps {
  isMenu?: boolean;
  closeMenu: () => void;
}

export default function Navigation({ isMenu, closeMenu }: NavigationProps) {
  const t = useTranslations("navigation");

  return (
    <nav className={clsx(css.navBox, isMenu && css.visible)}>
      <ul className={clsx(css.navList, isMenu && css.column)}>
        <li className={css.navItem}>
          <Link
            className={clsx(css.navLink, isMenu && css.menuLink)}
            href="/"
            onClick={closeMenu}
          >
            {t("prices")}
          </Link>
        </li>
        <li className={css.navItem}>
          <Link
            className={clsx(css.navLink, isMenu && css.menuLink)}
            href="/"
            onClick={closeMenu}
          >
            {t("projects")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
