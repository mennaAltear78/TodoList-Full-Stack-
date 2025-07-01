import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
 
 
 export const todoformSchema = z.object({
    title: z.string().min(5,{message:"title should be more than 5 character"}).max(20,{message:"title can't be more than 20 character"}),
    body: z.string().max(80,{message:"title can't be more than 20 character"}).optional(),
    completed: z.boolean().optional(),
  
  })
 export   const form = useForm<z.infer<typeof todoformSchema>>