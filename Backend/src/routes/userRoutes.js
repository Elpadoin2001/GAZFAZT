import { Router } from "express";
import { getAllUsers, getUserById, createUser } from "../controllers/UserController.js";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);

export default router;
