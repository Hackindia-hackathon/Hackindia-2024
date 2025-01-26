import express from "express";
import { authMiddleware } from "../middlewares/middleware";
import { siginController } from "../controllers/signinController";
import { taskController } from "../controllers/taskControler";
import { getAllTask } from "../controllers/getAllTaskControler";

import { imageURLImport } from "../controllers/imageURL";

const router = express.Router();



router.post('/signin', siginController);
router.post('/task', authMiddleware, taskController)
router.get("/task/:id", authMiddleware, getAllTask);
router.get("/presignedUrl", authMiddleware,imageURLImport)

// router.post('/imageUpload',imageUpload);

export default router;