import FeedbacksSection from "@/components/FeedbacksSection/FeedbacksSection";
import css from "./Home.module.css";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homePage");

  return (
    <>
      <section>
        <div className="container">
          <h1>{t("title")}</h1>
        </div>
      </section>
      <FeedbacksSection />
    </>
  );
}
