import * as yup from "yup";
import LocaleKeys from "../locales";

export const paginationQueryValidator = yup.object().shape({
  page: yup.number().min(1).required(LocaleKeys.PAGE_REQUIRED),
  pageSizeLimit: yup
    .number()
    .min(1)
    .required(LocaleKeys.PAGE_SIZE_LIMIT_REQUIRED),
  orderBy: yup.string(),
  orderDirection: yup.string().oneOf(["ASC", "DESC"]),
});
