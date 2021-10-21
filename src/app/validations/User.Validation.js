import * as yup from "yup";
import LocaleKeys from "../locales";

const name = yup
  .string()
  .required(LocaleKeys.REQUIRED_FIRST_NAME)
  .trim()
  .min(3, LocaleKeys.INVALID_FIRST_NAME)
  .max(30, LocaleKeys.INVALID_FIRST_NAME)
  .matches(/^[a-zA-Z\s]*$/, LocaleKeys.INVALID_FIRST_NAME);

const email = yup
  .string()
  .email(LocaleKeys.INVALID_EMAIL)
  .required(LocaleKeys.REQUIRED_EMAIL);

const password = yup
  .string()
  .required(LocaleKeys.REQUIRED_PASSWORD)
  .min(8, LocaleKeys.INVALID_PASSWORD)
  .max(100, LocaleKeys.INVALID_PASSWORD)
  .matches(
    /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[0-9]).*$/,
    LocaleKeys.INVALID_PASSWORD
  );

export const login = yup.object().shape({ email, password });

export const registration = yup.object().shape({
  name,
  email,
  password,
});

export const changePassword = yup.object().shape({
  oldPassword: password,
  newPassword: password,
});
