import BaseController from "./Base.Controller";
import { usersPackage } from "../../../app/packages";

class UsersController extends BaseController {
  profile = async (req, res, next) => {
    const data = await this.exec(next, usersPackage.profile, req.userId);
    if (data) return this.okRes(req, res, data);
  };
}
export default new UsersController();
