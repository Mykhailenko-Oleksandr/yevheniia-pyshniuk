import { useTranslations } from "next-intl";
import css from "./Address.module.css";
import { Link } from "@/i18n/navigation";
import clsx from "clsx";

interface AddressProps {
  isMenu?: boolean;
}

export default function Address({ isMenu }: AddressProps) {
  const t = useTranslations("ariaLabel");

  return (
    <address className={clsx(css.addressBox, isMenu && css.visible)}>
      <ul className={clsx(css.addressList, isMenu && css.wrap)}>
        <li className={css.addressItem}>
          <Link
            className={clsx(css.addressLink, isMenu && css.menu)}
            href="tel:+380677702712"
            aria-label={t("phone")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width={22} height={22}>
              <use href="/icons.svg#phone"></use>
            </svg>
          </Link>
        </li>
        <li className={css.addressItem}>
          <Link
            className={clsx(css.addressLink, isMenu && css.menu)}
            href="mailto:genur31@gmail.com"
            aria-label={t("mail")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width={22} height={22}>
              <use href="/icons.svg#mail"></use>
            </svg>
          </Link>
        </li>
        <li className={css.addressItem}>
          <Link
            className={clsx(css.addressLink, isMenu && css.menu)}
            href="https://t.me/Gennur31"
            aria-label={t("telegram")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width={22} height={22}>
              <use href="/icons.svg#telegram"></use>
            </svg>
          </Link>
        </li>
        <li className={css.addressItem}>
          <Link
            className={clsx(css.addressLink, isMenu && css.menu)}
            href="https://wa.me/380677702712"
            aria-label={t("whatsApp")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width={22} height={22}>
              <use href="/icons.svg#whatsapp"></use>
            </svg>
          </Link>
        </li>
        <li className={css.addressItem}>
          <Link
            className={clsx(css.addressLink, isMenu && css.menu)}
            href="https://instagram.com/evheniia_pyshniuk"
            aria-label={t("instagram")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width={22} height={22}>
              <use href="/icons.svg#instagram"></use>
            </svg>
          </Link>
        </li>
      </ul>
    </address>
  );
}
