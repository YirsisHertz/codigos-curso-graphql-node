import { Router } from "express";
import {
  changePassword,
  changeUsername,
  login,
  register,
} from "../controllers/auth.controller";
import { validateJWT } from "../middlewares/validateJWT";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.patch("/change-password", [validateJWT], changePassword);
router.patch("/change-username", [validateJWT], changeUsername);

export { router as authRouter };
