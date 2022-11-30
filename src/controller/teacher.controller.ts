import { Teacher } from '@prisma/client'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';
import { addTeacherSchema } from '../zodSchema/teacher.zodSchema';
import {GetTeacherSchemaType} from '../zodSchema/teacher.zodSchema'
export const getTeacherHandler = async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try{
        const teachers = await prisma.teacher.findMany()
        return res.status(200).json(teachers)
    }
    catch(error){
        console.log(error)
        return res.status(400).json({ message: 'Server Error !' });
    }
}

export const addTeacherHandler = async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try{
        const newTeacher = req.body as Teacher
        await prisma.teacher.create({
            data:newTeacher
        })
        return res.status(200).json({message: 'add new teacher'})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({ message: 'Server Error !' });
    }
}


export const getTeacherByIdHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params as GetTeacherSchemaType;
      const teacherid = await prisma.teacher.findUnique({
        where: { id },
      })
      if(!teacherid){
        return res.status(400).json({message:"id is invalid"})
     }
      return res.status(200).json(teacherid);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server Error !' });
  }
};