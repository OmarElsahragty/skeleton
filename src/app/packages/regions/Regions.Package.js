import Database from "../../../infrastructure/database";
import {
  Filter,
  Pagination,
  Protocols,
  ObjectUndefinedRemoval,
} from "../../helpers";

// **==========================================================================
// **                               Regions
// **==========================================================================
export const showRegions = async (
  cityId,
  { pageNumber, pageSizeLimit, ...args }
) => {
  try {
    const Regions = await Database.Regions.findAndCountAll(
      Pagination(
        { where: ObjectUndefinedRemoval({ ...Filter(args), cityId }) },
        args
      )
    );

    return Protocols.appResponse({ data: Regions });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};
