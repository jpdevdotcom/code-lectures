import { Hono } from "hono";
import {
    addStudent,
    deleteStudent,
    getStudent,
    updateStudent,
} from "../controller/student-controller";

export const studentRoute = new Hono();

studentRoute.get("/getStudents", getStudent);
studentRoute.post("/addStudent", addStudent);
studentRoute.put("/updateStudent/:studentId", updateStudent);
studentRoute.delete("/deleteStudent/:studentId", deleteStudent);
