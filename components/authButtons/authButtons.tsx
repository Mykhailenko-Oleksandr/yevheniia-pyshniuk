import { useTranslations } from "next-intl";
import css from "./AuthButtons.module.css";
import { Link } from "@/i18n/navigation";
import clsx from "clsx";

export default function AuthButtons() {
  const t = useTranslations("authButtons");

  return (
    <ul className={css.list}>
      <li className={css.item}>
        <Link
          href="/login"
          className={css.btn}>
          {t("login")}
        </Link>
      </li>
      <li className={css.item}>
        <Link
          href="/register"
          className={clsx(css.btn, css.register)}>
          {t("register")}
        </Link>
      </li>
    </ul>
  );
}
