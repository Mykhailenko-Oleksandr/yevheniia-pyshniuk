"use client";

import { useQuery } from "@tanstack/react-query";
import css from "./FeedbacksSection.module.css";
import { getFeedbacks } from "@/lib/api/clientApi";

export default function FeedbacksSection() {
  const {
    data: feedbacks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: () => getFeedbacks(),
  });

  console.log(feedbacks);

  return (
    <section className={css.feedbacksSection}>
      <div className="container">
        <h2 className={css.title}>Останні відгуки</h2>

        {isLoading && (
          <p className={css.statusText}>Завантаження відгуків...</p>
        )}

        {error && (
          <p className={css.statusText} role="status">
            Помилка завантаження відгуків
          </p>
        )}

        {feedbacks && !isLoading && !error && feedbacks.length === 0 && (
          <p className={css.statusText}>Поки немає відгуків</p>
        )}

        {feedbacks &&
          !isLoading &&
          !error &&
          feedbacks.length > 0 &&
          feedbacks.map((feedback) => {
            return (
              <div key={feedback._id}>
                <h3>{feedback.userName}</h3>
                <p>{feedback.comment}</p>
                <div>{feedback.rating}</div>
              </div>
            );
          })}
        {/* 
        <button type="button" onClick={}>
          Залишити відгук
        </button> */}
      </div>
    </section>
  );
}
