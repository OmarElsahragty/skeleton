import RandExp from "randexp";

export const PassCodeGenerator = () =>
  new RandExp(
    /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[0-9])([A-Za-z0-9]{8,20}$)$/
  ).gen();
