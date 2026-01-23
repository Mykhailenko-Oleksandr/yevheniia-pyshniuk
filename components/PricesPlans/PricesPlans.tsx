import Image from "next/image";
import css from "./PricesPlans.module.css";

export default function PricesPlans() {
  return (
    <section className={css.pricesPlans}>
      <div className="container">
        <ul className={css.list}>
          <li className={css.item}>
            <Image
              className={css.image}
              src="/images/prices/heroPriceTab.webp"
              alt="Сучасна вітальня з сірою софою, круглими столиками та обідньою зоною в мінімалістичному стилі"
              width={300}
              height={200}
            />
            <div className={css.contentBox}>
              <h2 className={css.contentTitle}>Базовий (Технічний проект)</h2>
              <ul className={css.contentList}>
                <li className={css.contentItem}>
                  <p className={css.text}>Обмір</p>
                </li>
                <li className={css.contentItem}>
                  <p className={css.text}>Розробка 3-х варіантів планування</p>
                </li>
                <li className={css.contentItem}>
                  <p className={css.text}>Пакет професійних креслень:</p>
                  <ul className={css.contentListSecond}>
                    <li className={css.listSecondItem}>
                      <p className={css.text}>Обмірний план</p>
                    </li>
                    <li className={css.listSecondItem}>
                      <p className={css.text}>План демонтажу, монтажу</p>
                    </li>
                    <li className={css.listSecondItem}>
                      <p className={css.text}>План розміщення меблів</p>
                    </li>
                    <li className={css.listSecondItem}>
                      <p className={css.text}>План сантехнічних виводів</p>
                    </li>
                    <li className={css.listSecondItem}>
                      <p className={css.text}>План освітлення</p>
                    </li>
                    <li className={css.listSecondItem}>
                      <p className={css.text}>План теплоі підлоги</p>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className={css.bottomBox}>
                <div className={css.bottomTextBox}>
                  <p className={css.bottomBoxTextTop}>Термін виконання:</p>
                  <p className={css.bottomBoxTextBottom}>1 місяць</p>
                </div>
                <div className={css.bottomTextBox}>
                  <p className={css.bottomBoxTextTop}>Вартість:</p>
                  <p className={css.bottomBoxTextBottom}>5$ /м2</p>
                </div>
              </div>
            </div>
          </li>
          {/* <li className={css.item}>2</li>
          <li className={css.item}>3</li> */}
        </ul>
      </div>
    </section>
  );
}
