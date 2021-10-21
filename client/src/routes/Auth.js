import {
  LoginTemplate,
  RegistrationTemplate,
} from "../templates/Auth/Components";

const BaseRoute = "/auth";

export default [
  {
    name: "Login",
    path: BaseRoute,
    component: LoginTemplate,
    animationClass: "pageAnimation",
  },
  {
    name: "Registration",
    path: `${BaseRoute}/registration`,
    component: RegistrationTemplate,
    animationClass: "pageAnimation",
  },
];
