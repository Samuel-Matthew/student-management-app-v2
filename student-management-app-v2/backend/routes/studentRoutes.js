import { Router } from "express";
import {
  getStudents,
  addStudent,
  updateStudent
} from "../controllers/studentController.js";

const router = Router();

router.get("/", getStudents);
router.post("/", addStudent);
router.put("/:id", updateStudent);

export default router;