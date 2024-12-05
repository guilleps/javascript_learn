import { createAccessToken } from "../libs/jwt.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config/config.js";

// register
export const register = async (req, res) => {
  // uso del binding para la vinculacion de los datos enviados entre las solicitudes HTTP y el cuerpo de la solicitud
  const { username, email, password } = req.body; // viene desde el cliente (username, email, password), el cuerpo de la solicitud

  // no podemos permitir que se registren sin validacion, por ejemplo username or email iguales en distintas cuenta, revisar user.model.js
  try {
    const userFound = await User.findOne({ email });

    if (userFound) {
      return res.status(400).json(["The email exists in DB"]);
    }

    const passwordHash = await bcrypt.hash(password, 10); // hasheamos la password para que no se almacene la contraseña tal cual como se ingresa

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    // logica para guardar este documento en la base de datos
    const userSaved = await newUser.save();

    // creacion del token luego de guardar, para validar la sesion y el backend identifique si es propio y se almacene en una cookie
    const token = await createAccessToken({ id: userSaved._id }); // creamos el token con base al id del usuario

    // setear una cookie al momento que se genera el token y almacenarlo
    res.cookie("token", token);

    // respuesta al cliente
    res.json({
      email: userSaved.email,
      username: userSaved.username,
      id: userSaved.id,
    });
  } catch (error) {
    res.status(500).json([error.message]);
  }
};

// login

export const login = async (req, res) => {
  const { email, password } = req.body; // binding

  try {
    const userFound = await User.findOne({ email }); // guardamos en la variable el usuario que coincida con el email en la BD

    if (!userFound) {
      return res.status(400).json(["User not found"]); // validamos
    }

    const isMatch = await bcrypt.compare(password, userFound.password); // verificamos el password del request con el password de la BD

    if (!isMatch) {
      return res.status(400).json(["Incorrect password"]); // validamos
    }

    // usamos el token
    const token = await createAccessToken({ id: userFound._id }); // enviamos el id del user para crear un token

    res.cookie("token", token); // se crea una cookie(de express), y se ancla directamente al navegador

    // response
    res.json({
      email: userFound.email,
      username: userFound.username,
      id: userFound.id,
      createdAt: userFound.createdAt,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
