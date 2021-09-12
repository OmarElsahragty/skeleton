import BaseController from "./Base.Controller";
import { regionsPackage } from "../../../app/packages";

class RegionsController extends BaseController {
  showRegions = async (req, res, next) => {
    const data = await this.exec(
      next,
      regionsPackage.showRegions,
      req.params.cityId,
      req.query
    );
    if (data) return this.okRes(req, res, data);
  };
}
export default new RegionsController();
