import { Op } from "sequelize";
import { prohibitedFilterKeys } from "../../infrastructure/constants";

export default (params) => {
  const filterObj = {};

  Object.keys(params).map((key) => {
    const isProhibited = prohibitedFilterKeys.find((item) => item === key);
    if (isProhibited || !params[key]) return;

    let value = null;

    try {
      value = JSON.parse(params[key]);
    } catch {
      value = params[key];
    }

    if (Array.isArray(value)) {
      Object.assign(filterObj, {
        [key]: { [Op.contains]: value },
      });
    } else if (typeof value === "string") {
      Object.assign(filterObj, { [key]: { [Op.like]: `%${value}%` } });
    } else {
      Object.assign(filterObj, { [key]: { [Op.eq]: value } });
    }
  });

  return filterObj;
};
