import express  from "express";
import { connectDB } from "./config/db";
import routerClass from "./router/classroom.router";
import routerStudent from "./router/Student.router";
import routerTeacher from "./router/teacher.router";
const app = express()
const port = 3210

app.use(express.json())

connectDB();

app.use('/api/v1/student',routerStudent)
app.use('/api/v1/class',routerClass)
app.use('/api/v1/teacher',routerTeacher)

app.listen(port,()=>{
    console.log(`Server running in port ${port}`);
});