export default (
  query,
  { page = 1, pageSizeLimit = 10, orderBy, orderDirection = "ASC" }
) => ({
  ...query,
  limit: pageSizeLimit,
  offset: (page - 1) * pageSizeLimit,
  order: orderBy ? [[orderBy, orderDirection]] : null,
});
