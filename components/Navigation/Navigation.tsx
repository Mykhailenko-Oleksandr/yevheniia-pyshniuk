import { Link } from "@/i18n/navigation";
import css from "./Navigation.module.css";
import { useTranslations } from "next-intl";

export default function Navigation() {
  const t = useTranslations("navigation");

  return (
    <nav className={css.navBox}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link
            className={css.navLink}
            href="/">
            {t("prices")}
          </Link>
        </li>
        <li className={css.navItem}>
          <Link
            className={css.navLink}
            href="/">
            {t("projects")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
