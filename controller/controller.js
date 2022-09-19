import express from "express";
import { gau } from "../service/users.js";

const router = express.Router();

// router.get('/users', getUsers);
router.get('/allUsers', gau);
// router.get('/userByEmail/:userEmail', getUsersByEmail);

export default router;