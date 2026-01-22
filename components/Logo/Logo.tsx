import { Link } from "@/i18n/navigation";
import css from "./Logo.module.css";
import { useTranslations } from "next-intl";

interface LogoProps {
  closeMenu?: () => void;
}

export default function Logo({ closeMenu }: LogoProps) {
  const t = useTranslations("ariaLabel");

  return (
    <Link
      onClick={closeMenu}
      className={css.logoLink}
      href="/"
      aria-label={t("logotype")}>
      <svg
        className={css.logoIcon}
        width={48}
        height={48}>
        <use href="/icons.svg#logo"></use>
      </svg>
      <div className={css.nameBox}>
        <p className={css.firstName}>Yevheniia</p>
        <p className={css.lastName}>Pyshniuk</p>
      </div>
    </Link>
  );
}
