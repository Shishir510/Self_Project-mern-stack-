import express from "express";
import cors from "cors"
import { getEmployee, createEmployee, deletePost } from "../controllers/employees.js";

//storing express router object in router variable
const router = express.Router();

//GET request to fetch the Employee Data from database
router.get("/", cors(), getEmployee)

// POST request to post the Employee Data to database
router.post("/", cors(), createEmployee)


router.delete("/:id", cors(), deletePost)

export default router;