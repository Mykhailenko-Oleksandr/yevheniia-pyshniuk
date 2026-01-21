import { Link } from "@/i18n/navigation";
import css from "./Navigation.module.css";
import { useTranslations } from "next-intl";
import clsx from "clsx";

interface NavigationProps {
  isMenu?: boolean;
}

export default function Navigation({ isMenu }: NavigationProps) {
  const t = useTranslations("navigation");

  return (
    <nav className={clsx(css.navBox, isMenu && css.visible)}>
      <ul className={clsx(css.navList, isMenu && css.column)}>
        <li className={css.navItem}>
          <Link className={css.navLink} href="/">
            {t("prices")}
          </Link>
        </li>
        <li className={css.navItem}>
          <Link className={css.navLink} href="/">
            {t("projects")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
