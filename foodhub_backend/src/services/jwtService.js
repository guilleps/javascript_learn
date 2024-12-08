import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

export const createToken = ({ correo, role }) => {
  return jwt.sign(
    {
      iss: "FoodHB-ATUHBACK",
      sub: correo,
      role: role,
      jti: uuidv4(),
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
};
