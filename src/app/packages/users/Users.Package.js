import Database from "../../../infrastructure/database";
import { Protocols } from "../../helpers";
import Config from "../../../../config";

// **==========================================================================
// **                              Users
// **==========================================================================

export const profile = async (userId) => {
  try {
    const user = await Database.Users.findByPk(userId, {
      attributes: { exclude: ["password"] },
    });

    if (user.picture) user.picture = `${Config.CloudBucketURL}${user.picture}`;

    return Protocols.appResponse({ data: user });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};
