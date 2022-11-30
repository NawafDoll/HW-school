import { Classroom } from '@prisma/client'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/db';
import { addClassSchema } from '../zodSchema/classroom.zodSchema';
import {GetClassSchemaType} from '../zodSchema/classroom.zodSchema'
export const getClassHandler = async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try{
        const classes = await prisma.classroom.findMany()
        return res.status(200).json(classes)
    }
    catch(error){
        console.log(error)
        return res.status(400).json({ message: 'Server Error !' });
    }
}

export const addClassHandler = async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try{
        const newClassroom = req.body as Classroom
        await prisma.classroom.create({
            data:newClassroom
        })
        return res.status(200).json({message: 'add new classroom'})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({ message: 'Server Error !' });
    }
}


export const getClassByIdHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params as GetClassSchemaType;
      const classid = await prisma.classroom.findUnique({
        where: { id },
      })
      if(!classid){
        return res.status(400).json({message:"id is invalid"})
     }
      return res.status(200).json(classid);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server Error !' });
  }
};