import { Router } from "express";
import { registerController } from "../controllers/auth.controller";

const router = Router();

router.get("/", );
router.post("/", registerController);
router.patch("/:id", );
router.delete("/:id", );

export default router;