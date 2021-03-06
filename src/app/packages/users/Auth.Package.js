import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Database from "../../../infrastructure/database";
import { Protocols } from "../../helpers";
import Config from "../../../../config";
import LocaleKeys from "../../locales";

// **==========================================================================
// **                              Auth
// **==========================================================================
export const checkUser = async (id = null, email = null, adminCheck = null) => {
  try {
    const user = await Database.Users.findOne({
      where: { id, email },
      attributes: ["id", "privileges", "isAdmin"],
    });

    return Protocols.appCheckers({
      data: user,
      isValid:
        !!user &&
        (adminCheck === null || adminCheck === user.dataValues.isAdmin),
    });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const login = async ({ email, password }) => {
  try {
    const user = await Database.Users.findOne({
      where: { email },
    });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        { id: user.id, email: user.email },
        Config.JwtSecret,
        { expiresIn: Config.JwtLifeTime }
      );

      delete user.dataValues.password;
      return Protocols.appResponse({
        data: { token, userData: user },
      });
    } else {
      return Protocols.appResponse({ err: LocaleKeys.WRONG_CREDENTIALS });
    }
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};

export const registration = async ({ password, ...args }) => {
  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const user = await Database.Users.create({
      password: hashedPassword,
      ...args,
    });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      Config.JwtSecret,
      { expiresIn: Config.JwtLifeTime }
    );

    delete user.dataValues.password;
    return Protocols.appResponse({ data: { token, userData: user } });
  } catch (err) {
    return Protocols.appResponse({ err });
  }
};
