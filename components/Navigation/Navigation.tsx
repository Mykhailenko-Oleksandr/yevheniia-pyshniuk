import { Link, usePathname } from "@/i18n/navigation";
import css from "./Navigation.module.css";
import { useTranslations } from "next-intl";
import clsx from "clsx";

interface NavigationProps {
  isMenu?: boolean;
  closeMenu: () => void;
}

export default function Navigation({ isMenu, closeMenu }: NavigationProps) {
  const t = useTranslations("navigation");

  const pathname = usePathname();

  return (
    <nav className={clsx(css.navBox, isMenu && css.visible)}>
      <ul className={clsx(css.navList, isMenu && css.column)}>
        <li className={css.navItem}>
          <Link
            className={clsx(
              css.navLink,
              isMenu && css.menuLink,
              pathname === "/prices" && css.current,
            )}
            href="/prices"
            onClick={closeMenu}>
            {t("prices")}
          </Link>
        </li>
        <li className={css.navItem}>
          <Link
            className={clsx(
              css.navLink,
              isMenu && css.menuLink,
              pathname === "/projects" && css.current,
            )}
            href="/projects"
            onClick={closeMenu}>
            {t("projects")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
