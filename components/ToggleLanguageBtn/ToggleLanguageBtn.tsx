"use client";

import css from "./ToggleLanguageBtn.module.css";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function ToggleLanguageBtn() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  function toggleLang() {
    router.replace(pathname, { locale: currentLocale === "en" ? "uk" : "en" });
  }

  return (
    <button
      className={css.btn}
      type="button"
      onClick={toggleLang}></button>
  );
}
