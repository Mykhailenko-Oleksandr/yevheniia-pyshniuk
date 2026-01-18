import Link from "next/link";
import css from "./Home.module.css";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <section>
      <div className="container">
        <h1>{t("title")}</h1>
      </div>

      {/* <Link href={switchPath}>{otherLocale.toUpperCase()}</Link> */}
    </section>
  );
}
