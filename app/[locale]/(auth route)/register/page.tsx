"use client";

import css from "./Register.module.css";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";
import { register } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import { Link, useRouter } from "@/i18n/navigation";
import { ApiError } from "@/app/api/api";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const createRegistrationFormSchema = (t: (key: string) => string) =>
  Yup.object({
    firstName: Yup.string()
      .min(3, t("validation.firstName.min"))
      .max(30, t("validation.firstName.max"))
      .required(t("validation.firstName.required")),

    lastName: Yup.string()
      .min(3, t("validation.lastName.min"))
      .max(30, t("validation.lastName.max"))
      .required(t("validation.lastName.required")),

    email: Yup.string()
      .email(t("validation.email.invalid"))
      .max(64, t("validation.email.max"))
      .required(t("validation.email.required")),

    password: Yup.string()
      .min(8, t("validation.password.min"))
      .max(100, t("validation.password.max"))
      .required(t("validation.password.required")),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], t("validation.confirmPassword.match"))
      .required(t("validation.confirmPassword.required")),
  });

export default function Register() {
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);
  const t = useTranslations("registerPage");

  async function handleSubmit(
    values: FormData,
    formikHelpers: FormikHelpers<FormData>,
  ) {
    try {
      const newUser = await register({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      });

      setUser(newUser);
      formikHelpers.resetForm();
      router.replace("/profile");
    } catch (error: unknown) {
      const err = error as ApiError;

      if (
        err.status === 409 &&
        err.response?.data?.response?.message.includes(
          "This email address is already in use",
        )
      ) {
        toast.error(t("toastEmailUse"));
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
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={createRegistrationFormSchema(t)}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className={css.form}>
            <fieldset className={css.fieldset}>
              <legend className={css.title}>{t("form.title")}</legend>
              <div className={css.inputWrapper}>
                <label htmlFor="firstName">{t("form.firstName")}*</label>
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  className={css.formInput}
                  placeholder={t("form.firstNamePlaceholder")}
                />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className={css.formError}
                />
              </div>

              <div className={css.inputWrapper}>
                <label htmlFor="lastName">{t("form.lastName")}*</label>
                <Field
                  id="lastName"
                  name="lastName"
                  type="text"
                  className={css.formInput}
                  placeholder={t("form.lastNamePlaceholder")}
                />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className={css.formError}
                />
              </div>

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

              <div className={css.inputWrapper}>
                <label htmlFor="confirmPassword">
                  {t("form.confirmPassword")}*
                </label>
                <Field
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className={css.formInput}
                  placeholder="********"
                />
                <ErrorMessage
                  name="confirmPassword"
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
        <Link href="/login" className={css.textLink}>
          {t("linkBottom")}
        </Link>
      </p>
    </>
  );
}
