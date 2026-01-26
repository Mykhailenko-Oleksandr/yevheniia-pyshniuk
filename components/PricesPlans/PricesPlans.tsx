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
              <div>
                <h2 className={css.contentTitle}>
                  Базовий <span>(Технічний проект)</span>
                </h2>
                <ul className={css.contentList}>
                  <li className={css.contentItem}>
                    <p className={css.text}>- Обмір</p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={css.text}>
                      - Розробка 3-х варіантів планування
                    </p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={`${css.text} ${css.packageTitle}`}>
                      - Пакет професійних креслень:
                    </p>
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
              </div>
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
          <li className={css.item}>
            <Image
              className={css.image}
              src="/images/prices/heroPriceTab.webp"
              alt="Сучасна вітальня з сірою софою, круглими столиками та обідньою зоною в мінімалістичному стилі"
              width={300}
              height={200}
            />
            <div className={css.contentBox}>
              <div>
                <h2 className={css.contentTitle}>Оптимальний пакет</h2>
                <ul className={css.contentList}>
                  <li className={css.contentItem}>
                    <p className={css.text}>- Обмір</p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={css.text}>
                      - Розробка 3-х варіантів планування
                    </p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={`${css.text} ${css.packageTitle}`}>
                      - Пакет професійних креслень
                    </p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={css.text}>
                      - Специфікація оздоблювальних матеріалів та предметів
                      інтер'єру
                    </p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={css.text}>
                      - Колажі з дизайн-концепцією для кожного приміщення
                    </p>
                  </li>
                </ul>
              </div>
              <div className={css.bottomBox}>
                <div className={css.bottomTextBox}>
                  <p className={css.bottomBoxTextTop}>Термін виконання:</p>
                  <p className={css.bottomBoxTextBottom}>2-2.5 міс</p>
                </div>
                <div className={css.bottomTextBox}>
                  <p className={css.bottomBoxTextTop}>Вартість:</p>
                  <p className={css.bottomBoxTextBottom}>10$ /м2</p>
                </div>
              </div>
            </div>
          </li>
          <li className={css.item}>
            <Image
              className={css.image}
              src="/images/prices/heroPriceTab.webp"
              alt="Сучасна вітальня з сірою софою, круглими столиками та обідньою зоною в мінімалістичному стилі"
              width={300}
              height={200}
            />
            <div className={css.contentBox}>
              <div>
                <h2 className={css.contentTitle}>Повний комплекс</h2>
                <ul className={css.contentList}>
                  <li className={css.contentItem}>
                    <p className={css.text}>- Обмір</p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={css.text}>
                      - Розробка 3-х варіантів планування
                    </p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={`${css.text} ${css.packageTitle}`}>
                      - Пакет професійних креслень
                    </p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={css.text}>
                      - Специфікація оздоблювальних матеріалів та предметів
                      інтер'єру
                    </p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={css.text}>
                      - 3D-візуалізації кожного приміщення
                    </p>
                  </li>
                  <li className={css.contentItem}>
                    <p className={css.text}>
                      - Альбом креслень (у друкованому та електронному форматах)
                    </p>
                  </li>
                </ul>
              </div>
              <div className={css.bottomBox}>
                <div className={css.bottomTextBox}>
                  <p className={css.bottomBoxTextTop}>Термін виконання:</p>
                  <p className={css.bottomBoxTextBottom}>3.5-4 міс</p>
                </div>
                <div className={css.bottomTextBox}>
                  <p className={css.bottomBoxTextTop}>Вартість:</p>
                  <p className={css.bottomBoxTextBottom}>17$ /м2</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
