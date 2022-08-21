import express from "express";
import { getUsers, getAllUsers, getUsersByEmail } from "../service/users.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/allUsers', getAllUsers);
router.get('/userByEmail/:userEmail', getUsersByEmail);

export default router;