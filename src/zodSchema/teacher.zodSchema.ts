import { z } from "zod";


export const addTeacherSchema = z.object({
    body:z.object({
        id:z.string({required_error:'id is required'})
        .min(2,'id must be more than 2'),

        name:z.string({required_error:'name is required'})
        .min(3,'name must be more than 3'),
        
    })
})


export const getTeacherSchema = z.object({
    params: z.object({
      id: z.string({ required_error: 'Please send id in the params' }),
    }),
  });

  export type GetTeacherSchemaType = z.infer<
  typeof getTeacherSchema
>['params'];
