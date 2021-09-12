import Database from "../../../infrastructure/database";
import { Filter, Pagination, Protocols } from "../../helpers";

// **==========================================================================
// **                               Regions
// **==========================================================================
export const showRegions = async (
  cityId,
  { pageNumber, pageSizeLimit, ...args }
) => {
  try {
    const Regions = await Database.Regions.findAndCountAll({
      ...Pagination(
        { where: { ...Filter(args), cityId } },
        pageNumber,
        pageSizeLimit
      ),
    });

    return Protocols.appResponse({ data: Regions });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};
