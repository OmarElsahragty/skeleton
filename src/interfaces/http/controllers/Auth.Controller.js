import BaseController from "./Base.Controller";
import { usersPackage } from "../../../app/packages";

class AuthController extends BaseController {
  login = async (req, res, next) => {
    const data = await this.exec(next, usersPackage.login, req.body);
    if (data) return this.okRes(req, res, data);
  };

  registration = async (req, res, next) => {
    const data = await this.exec(next, usersPackage.registration, req.body);
    if (data) return this.okRes(req, res, data);
  };
}
export default new AuthController();
