"use client";

import { useTranslations } from "next-intl";
import css from "./Login.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { Link, useRouter } from "@/i18n/navigation";
import { useAuthStore } from "@/lib/store/authStore";
import { login } from "@/lib/api/clientApi";
import { ApiError } from "@/app/api/api";
import toast from "react-hot-toast";

interface FormData {
  email: string;
  password: string;
}

const createRegistrationFormSchema = (t: (key: string) => string) =>
  Yup.object({
    email: Yup.string()
      .email(t("validation.email.invalid"))
      .max(64, t("validation.email.max"))
      .required(t("validation.email.required")),

    password: Yup.string()
      .min(8, t("validation.password.min"))
      .max(100, t("validation.password.max"))
      .required(t("validation.password.required")),
  });

export default function Login() {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const t = useTranslations("loginPage");

  async function handleSubmit(
    values: FormData,
    formikHelpers: FormikHelpers<FormData>,
  ) {
    try {
      const user = await login({
        email: values.email,
        password: values.password,
      });

      setUser(user);
      formikHelpers.resetForm();
      router.replace("/profile");
    } catch (error: unknown) {
      const err = error as ApiError;

      if (
        err.status === 401 &&
        err.response?.data?.response?.message.includes("Incorrect credentials")
      ) {
        toast.error(t("toastBadLogin"));
      } else {
        toast.error(
          err.response?.data?.response?.validation?.body?.message ||
            err.response?.data?.response?.message ||
            err.message,
        );
      }
    }
  }

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={createRegistrationFormSchema(t)}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className={css.form}>
            <fieldset className={css.fieldset}>
              <legend className={css.title}>{t("form.title")}</legend>
              <div className={css.inputWrapper}>
                <label htmlFor="email">{t("form.email")}*</label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className={css.formInput}
                  placeholder={t("form.emailPlaceholder")}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.formError}
                />
              </div>

              <div className={css.inputWrapper}>
                <label htmlFor="password">{t("form.password")}*</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  className={css.formInput}
                  placeholder="********"
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className={css.formError}
                />
              </div>

              <button
                type="submit"
                className={css.btn}
                disabled={isSubmitting || !isValid || !dirty}
              >
                {t("form.button")}
              </button>
            </fieldset>
          </Form>
        )}
      </Formik>
      <p className={css.formText}>
        {t("textBottom")}&nbsp;
        <Link href="/register" className={css.textLink}>
          {t("linkBottom")}
        </Link>
      </p>
    </>
  );
}
