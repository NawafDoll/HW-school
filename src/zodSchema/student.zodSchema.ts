import { z } from "zod";


export const addStudentSchema = z.object({
    body:z.object({
        id:z.string({required_error:'id is required'})
        .min(2,'id must be more than 2'),

        name:z.string({required_error:'name is required'})
        .min(3,'name must be more than 3'),

        age:z.number({required_error:'name is required'})
        .min(5,"age must be bigger than 3"),

        major:z.string({required_error:'major is required'})
        
    })
})


export const getStudentSchema = z.object({
    params: z.object({
      id: z.string({ required_error: 'Please send id in the params' }),
    }),
  });

  export type GetStudentSchemaType = z.infer<
  typeof getStudentSchema
>['params'];
