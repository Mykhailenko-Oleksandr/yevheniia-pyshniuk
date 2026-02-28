"use client";

import { useQuery } from "@tanstack/react-query";
import css from "./FeedbacksSection.module.css";
import { getFeedbacks } from "@/lib/api/clientApi";
import { useState } from "react";
import FeedbackFormModal from "../FeedbackFormModal/FeedbackFormModal";
import FeedbacksSwiper from "../FeedbackSwiper/FeedbacksSwiper";
import Button from "../Button/Button";
import { useTranslations } from "next-intl";

export default function FeedbacksSection() {
  const [isFeedbackFormOpen, setIsFeedbackFormOpen] = useState(false);
  const t = useTranslations("feedbacksSection");

  const {
    data: feedbacks,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => getFeedbacks(),
    staleTime: 5 * 60 * 1000,
  });

  const visibleFeedbacks = feedbacks ?? [];

  return (
    <>
      <section className={css.section}>
        <div className="container">
          <h2 className={css.title}>{t("title")}</h2>

          {isLoading && <p className={css.statusText}>{t("loadingText")}...</p>}

          {error && (
            <>
              <p className={css.statusText} role="status">
                {t("errorText")}
              </p>
              <Button
                type="button"
                text={t("retryBtn")}
                onClick={() => refetch()}
              />
            </>
          )}

          {!isLoading && !error && visibleFeedbacks.length === 0 && (
            <p className={css.statusText}>{t("zeroFeedbacks")}</p>
          )}

          {!isLoading && !error && visibleFeedbacks.length > 0 && (
            <>
              <FeedbacksSwiper feedbacks={visibleFeedbacks} />
              <Button
                type="button"
                text={t("btnAddFeedback")}
                onClick={() => setIsFeedbackFormOpen(true)}
              />
            </>
          )}
        </div>
      </section>

      {isFeedbackFormOpen && (
        <FeedbackFormModal
          isOpen={isFeedbackFormOpen}
          onClose={() => setIsFeedbackFormOpen(false)}
        />
      )}
    </>
  );
}
