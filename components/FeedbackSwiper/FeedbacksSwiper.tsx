"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import css from "./FeedbacksSwiper.module.css";

import { Feedback } from "@/types/feedback";
import StarsRating from "../StarsRating/StarsRating";
import { useTranslations } from "next-intl";

interface FeedbacksSwiperProps {
  feedbacks: Feedback[];
}

export default function FeedbacksSwiper({ feedbacks }: FeedbacksSwiperProps) {
  const tAria = useTranslations("ariaLabel");

  return (
    <>
      <div className={css.swiperBox}>
        <button
          className={`feedbacksPrev ${css.navBtn}`}
          aria-label={tAria("feedbacksPrev")}
          type="button"
        >
          <svg
            width="24"
            height="24"
            aria-hidden="true"
            className={css.iconBtnPrev}
          >
            <use href="/icons.svg#arrow" />
          </svg>
        </button>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          navigation={{
            nextEl: ".feedbacksNext",
            prevEl: ".feedbacksPrev",
          }}
          pagination={{
            el: ".feedbacksPagination",
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={css.swiper}
        >
          {feedbacks.map((feedback) => {
            return (
              <SwiperSlide key={feedback._id}>
                <article className={css.swiperSlideBox}>
                  <h3 className={css.userName}>{feedback.userName}</h3>
                  <StarsRating rating={feedback.rating} />
                  <p className={css.comment}>{feedback.comment}</p>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className={`feedbacksNext ${css.navBtn}`}
          aria-label={tAria("feedbacksNext")}
          type="button"
        >
          <svg width="24" height="24" aria-hidden="true">
            <use href="/icons.svg#arrow" />
          </svg>
        </button>
      </div>

      <div
        className={`feedbacksPagination ${css.pagination}`}
        aria-label={tAria("feedbacksPagination")}
      />
    </>
  );
}
