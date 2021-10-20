export default (err, additionalInfo = "") => {
  console.error(
    `${
      err.errors
        ? err.errors
            .reduce(
              (accumulator, error) => accumulator.concat(error.message),
              []
            )
            .join(" and ")
        : err.message || err
    }${additionalInfo && " - "}${additionalInfo}`.error
  );
};
