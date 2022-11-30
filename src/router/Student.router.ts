import express  from "express";
import { addStudentHandler, getStudentHandler ,getStudentByIdHandler} from "../controller/student.controller";
import validate from "../midallware/validate";
import { addStudentSchema, getStudentSchema } from "../zodSchema/student.zodSchema";


const routerStudent = express.Router();

routerStudent.get("/",getStudentHandler)
routerStudent.post("/addstudent",validate(addStudentSchema),addStudentHandler)
routerStudent.get("/:id",validate(getStudentSchema),getStudentByIdHandler)

export default routerStudent