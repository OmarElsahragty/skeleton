import LocaleKeys from "../locales";

export const appCheckers = ({ data, isValid }) => {
  if (isValid) {
    try {
      return data.toJSON();
    } catch {
      return data;
    }
  }
  return {};
};

export const appResponse = ({ err, data, events }) => {
  if (err) {
    return {
      err: {
        isAppError: typeof err === "string",
        error: err,
      },
      data: undefined,
      events: undefined,
    };
  } else if (!data || data.count === 0 || data.length === 0) {
    return {
      err: {
        isAppError: true,
        error: LocaleKeys.NO_DATA_404,
      },
      data: undefined,
      events: undefined,
    };
  }
  return { err, data, events };
};
