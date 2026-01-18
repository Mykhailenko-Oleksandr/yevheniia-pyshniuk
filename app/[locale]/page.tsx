import LangBtn from "@/components/LangBtn/LangBtn";
import css from "./Home.module.css";
import { useTranslations } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default function Home({ params }: HomeProps) {
  const { locale } = use(params);

  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations("HomePage");

  return (
    <section>
      <div className="container">
        <h1>{t("title")}</h1>
      </div>

      <LangBtn />

      {/* <Link href={switchPath}>{otherLocale.toUpperCase()}</Link> */}
    </section>
  );
}
