import { useTranslations } from "next-intl";
import css from "./AuthButtons.module.css";
import { Link } from "@/i18n/navigation";
import clsx from "clsx";

interface AuthButtonsProps {
  isMenu?: boolean;
}

export default function AuthButtons({ isMenu }: AuthButtonsProps) {
  const t = useTranslations("authButtons");

  return (
    <ul className={clsx(css.list, isMenu && css.menu)}>
      <li className={css.item}>
        <Link href="/login" className={css.btn}>
          {t("login")}
        </Link>
      </li>
      <li className={css.item}>
        <Link href="/register" className={clsx(css.btn, css.register)}>
          {t("register")}
        </Link>
      </li>
    </ul>
  );
}
