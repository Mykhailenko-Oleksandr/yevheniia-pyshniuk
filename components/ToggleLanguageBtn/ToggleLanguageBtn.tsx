"use client";

import css from "./ToggleLanguageBtn.module.css";
import { usePathname, useRouter } from "@/i18n/navigation";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";

interface ToggleLanguageBtnProps {
  isMenu?: boolean;
}

export default function ToggleLanguageBtn({ isMenu }: ToggleLanguageBtnProps) {
  const t = useTranslations("ariaLabel");

  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  function toggleLang() {
    router.replace(pathname, { locale: currentLocale === "en" ? "uk" : "en" });
  }

  return (
    <button
      className={clsx(
        css.btn,
        currentLocale === "en" && css.enLocale,
        currentLocale === "uk" && css.uaLocale,
        isMenu && css.menu,
      )}
      type="button"
      onClick={toggleLang}
      aria-label={t("languageBtn")}
    ></button>
  );
}
