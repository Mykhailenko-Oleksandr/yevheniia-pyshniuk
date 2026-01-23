import css from "./PricesHero.module.css";
import { useTranslations } from "next-intl";

export default function PricesHero() {
  const t = useTranslations("pricesHero");

  return (
    <section className={css.heroPrice}>
      <div className={"container"}>
        <h1 className={css.heroTitle}>
          <span className={css.textTop}>{t("titleTop")}</span>
          <span className={css.textBottom}>{t("titleBottom")}</span>
        </h1>
      </div>
    </section>
  );
}
