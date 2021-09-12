import * as yup from "yup";
import LocaleKeys from "../locales";

const firstName = yup
  .string()
  .required(LocaleKeys.REQUIRED_FIRST_NAME)
  .trim()
  .min(3, LocaleKeys.INVALID_FIRST_NAME)
  .max(30, LocaleKeys.INVALID_FIRST_NAME)
  .matches(/^[a-zA-Z\s]*$/, LocaleKeys.INVALID_FIRST_NAME);

const lastName = yup
  .string()
  .required(LocaleKeys.REQUIRED_LAST_NAME)
  .trim()
  .min(3, LocaleKeys.INVALID_LAST_NAME)
  .max(30, LocaleKeys.INVALID_LAST_NAME)
  .matches(/^[a-zA-Z\s]*$/, LocaleKeys.INVALID_LAST_NAME);

const gender = yup
  .mixed()
  .oneOf(["M", "F"], LocaleKeys.INVALID_GENDER)
  .required(LocaleKeys.REQUIRED_GENDER);

const picture = yup.string().nullable();

const dateOfBirth = yup
  .string()
  .required(LocaleKeys.REQUIRED_DATE_OF_BIRTH)
  .trim()
  .matches(
    /^(19|20)\d\d([-])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])$/,
    LocaleKeys.INVALID_DATE_OF_BIRTH_SYNTAX
  )
  .test(
    null,
    LocaleKeys.INVALID_DATE_OF_BIRTH,
    (value) =>
      new Date(new Date().setFullYear(new Date().getFullYear() - 10)) >
      new Date(value)
  );

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
  firstName,
  lastName,
  email,
  gender,
  picture,
  dateOfBirth,
  password,
});

export const changePassword = yup.object().shape({
  oldPassword: password,
  newPassword: password,
});
