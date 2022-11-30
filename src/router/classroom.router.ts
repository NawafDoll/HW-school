import express  from "express";
import { addClassHandler, getClassHandler ,getClassByIdHandler} from "../controller/classroom.controller";
import validate from "../midallware/validate";
import { addClassSchema, getClassSchema } from "../zodSchema/classroom.zodSchema";


const routerClass = express.Router();

routerClass.get("/",getClassHandler)
routerClass.post("/addclass",validate(addClassSchema),addClassHandler)
routerClass.get("/:id",validate(getClassSchema),getClassByIdHandler)

export default routerClass