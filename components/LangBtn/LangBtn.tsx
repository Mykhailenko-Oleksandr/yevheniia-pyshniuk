"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LangBtn() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  function toggleLang() {
    router.replace(pathname, { locale: currentLocale === "en" ? "uk" : "en" });
  }

  return (
    <button
      style={{ width: 40, height: 40 }}
      type="button"
      onClick={toggleLang}
    ></button>
  );
}
