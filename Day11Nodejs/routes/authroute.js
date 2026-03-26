import express from "express"
import authController from "../controller/authController.js";

const router  = express.Router();

router.get('/login',authController.generateToken);

export default router;