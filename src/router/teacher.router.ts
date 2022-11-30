import express  from "express";
import { addTeacherHandler, getTeacherHandler ,getTeacherByIdHandler} from "../controller/teacher.controller";
import validate from "../midallware/validate";
import { addTeacherSchema, getTeacherSchema } from "../zodSchema/teacher.zodSchema";


const routerTeacher = express.Router();

routerTeacher.get("/",getTeacherHandler)
routerTeacher.post("/addteacher",validate(addTeacherSchema),addTeacherHandler)
routerTeacher.get("/:id",validate(getTeacherSchema),getTeacherByIdHandler)

export default routerTeacher