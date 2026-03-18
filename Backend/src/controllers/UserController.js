import bcrypt from "bcrypt";
import db from "../models/index.js";

const { User } = db;

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener usuarios" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, { attributes: { exclude: ["password"] } });
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener usuario" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { nombre, correo, password, telefono, rolId } = req.body;
    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      nombre,
      correo,
      password: hashed,
      telefono,
      rolId,
    });

    const { password: _p, ...rest } = user.toJSON();
    res.status(201).json(rest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear usuario" });
  }
};
