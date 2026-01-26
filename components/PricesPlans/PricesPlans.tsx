import css from "./PricesPlans.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PricesPlans() {
  const tBasic = useTranslations("pricesPlans.basic");
  const tOptimal = useTranslations("pricesPlans.optimal");
  const tFull = useTranslations("pricesPlans.full");

  return (
    <section className={css.pricesPlans}>
      <div className="container">
        <ul className={css.list}>
          <li className={css.item}>
            <Image
              className={css.image}
              src="/images/prices/heroPriceTab.webp"
              alt={tBasic("image")}
              width={300}
              height={200}
            />
            <div className={css.contentBox}>
              <div>
                <h2 className={css.contentTitle}>
                  {tBasic("title.0")} <span>({tBasic("title.1")})</span>
                </h2>
                <ul className={css.contentList}>
                  <li className={css.contentItem}>
                    <p className={css.text}>- {tBasic("features.0")}</p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={css.text}>- {tBasic("features.1")}</p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={`${css.text} ${css.packageTitle}`}>
                      - {tBasic("features.2")}:
                    </p>
                    <ul className={css.contentListSecond}>
                      <li className={css.listSecondItem}>
                        <p className={css.text}>{tBasic("subFeatures.0")}</p>
                      </li>
                      <li className={css.listSecondItem}>
                        <p className={css.text}>{tBasic("subFeatures.1")}</p>
                      </li>
                      <li className={css.listSecondItem}>
                        <p className={css.text}>{tBasic("subFeatures.2")}</p>
                      </li>
                      <li className={css.listSecondItem}>
                        <p className={css.text}>{tBasic("subFeatures.3")}</p>
                      </li>
                      <li className={css.listSecondItem}>
                        <p className={css.text}>{tBasic("subFeatures.4")}</p>
                      </li>
                      <li className={css.listSecondItem}>
                        <p className={css.text}>{tBasic("subFeatures.5")}</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className={css.bottomBox}>
                <div className={css.bottomTextBox}>
                  <p className={css.bottomBoxTextTop}>
                    {tBasic("duration.0")}:
                  </p>
                  <p className={css.bottomBoxTextBottom}>
                    {tBasic("duration.1")}
                  </p>
                </div>
                <div className={css.bottomTextBox}>
                  <p className={css.bottomBoxTextTop}>{tBasic("price.0")}:</p>
                  <p className={css.bottomBoxTextBottom}>{tBasic("price.1")}</p>
                </div>
              </div>
            </div>
          </li>
          <li className={css.item}>
            <Image
              className={css.image}
              src="/images/prices/heroPriceTab.webp"
              alt={tOptimal("image")}
              width={300}
              height={200}
            />
            <div className={css.contentBox}>
              <div>
                <h2 className={css.contentTitle}>{tOptimal("title")}</h2>
                <ul className={css.contentList}>
                  <li className={css.contentItem}>
                    <p className={css.text}>- {tOptimal("features.0")}</p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={css.text}>- {tOptimal("features.1")}</p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={`${css.text} ${css.packageTitle}`}>
                      - {tOptimal("features.2")}
                    </p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={css.text}>- {tOptimal("features.3")}</p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={css.text}>- {tOptimal("features.4")}</p>
                  </li>
                </ul>
              </div>
              <div className={css.bottomBox}>
                <div className={css.bottomTextBox}>
                  <p className={css.bottomBoxTextTop}>
                    {tOptimal("duration.0")}:
                  </p>
                  <p className={css.bottomBoxTextBottom}>
                    {tOptimal("duration.1")}
                  </p>
                </div>
                <div className={css.bottomTextBox}>
                  <p className={css.bottomBoxTextTop}>{tOptimal("price.0")}:</p>
                  <p className={css.bottomBoxTextBottom}>
                    {tOptimal("price.1")}
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className={css.item}>
            <Image
              className={css.image}
              src="/images/prices/heroPriceTab.webp"
              alt={tFull("image")}
              width={300}
              height={200}
            />
            <div className={css.contentBox}>
              <div>
                <h2 className={css.contentTitle}>{tFull("title")}</h2>
                <ul className={css.contentList}>
                  <li className={css.contentItem}>
                    <p className={css.text}>- {tFull("features.0")}</p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={css.text}>- {tFull("features.1")}</p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={`${css.text} ${css.packageTitle}`}>
                      - {tFull("features.2")}
                    </p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={css.text}>- {tFull("features.3")}</p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={css.text}>- {tFull("features.4")}</p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={css.text}>- {tFull("features.5")}</p>
                  </li>
                </ul>
              </div>
              <div className={css.bottomBox}>
                <div className={css.bottomTextBox}>
                  <p className={css.bottomBoxTextTop}>{tFull("duration.0")}:</p>
                  <p className={css.bottomBoxTextBottom}>
                    {tFull("duration.1")}
                  </p>
                </div>
                <div className={css.bottomTextBox}>
                  <p className={css.bottomBoxTextTop}>{tFull("price.0")}:</p>
                  <p className={css.bottomBoxTextBottom}>{tFull("price.1")}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
