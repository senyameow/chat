import * as z from "zod"
export const loginSchema = z.object({

    email: z.string().email('invalid email').min(1, ' '),
    password: z.string().min(4, ' ').max(12, ' ')
})

export const signUpSchema = loginSchema.extend({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    })
})

export type ILogin = z.infer<typeof loginSchema>;
export type ISignUp = z.infer<typeof signUpSchema>;