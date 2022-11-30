import { Student } from '@prisma/client'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';
import { addStudentSchema } from '../zodSchema/student.zodSchema';
import {GetStudentSchemaType} from '../zodSchema/student.zodSchema'
export const getStudentHandler = async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try{
        const students = await prisma.student.findMany()
        return res.status(200).json(students)
    }
    catch(error){
        console.log(error)
        return res.status(400).json({ message: 'Server Error !' });
    }
}

export const addStudentHandler = async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try{
        const newStudent = req.body as Student
        await prisma.student.create({
            data:newStudent
        })
        return res.status(200).json({message: 'add new student'})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({ message: 'Server Error !' });
    }
}


export const getStudentByIdHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params as GetStudentSchemaType;
      const student = await prisma.student.findUnique({
        where: { id },
      })
      if(!student){
        return res.status(400).json({message:"id is invalid"})
     }
      return res.status(200).json(student);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server Error !' });
  }
};