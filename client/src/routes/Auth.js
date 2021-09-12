import { LoginTemplate } from "../templates/Auth/Components";

const BaseRoute = "/auth";

export default [
  {
    exact: false,
    path: `${BaseRoute}/login`,
    component: LoginTemplate,
  },
];
