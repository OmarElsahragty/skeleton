export default (query, page = 1, pageSizeLimit = 10) => {
  const offset = (page - 1) * pageSizeLimit;
  const limit = pageSizeLimit;

  return {
    ...query,
    offset,
    limit,
  };
};
