import { z } from "zod";


export const addClassSchema = z.object({
    body:z.object({
        id:z.string({required_error:'id is required'})
        .min(2,'id must be more than 2'),

        name:z.string({required_error:'name is required'})
        .min(3,'name must be more than 3'),
        
    })
})


export const getClassSchema = z.object({
    params: z.object({
      id: z.string({ required_error: 'Please send id in the params' }),
    }),
  });

  export type GetClassSchemaType = z.infer<
  typeof getClassSchema
>['params'];
