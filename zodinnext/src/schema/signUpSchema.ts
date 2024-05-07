import {z} from "zod"

export const usernamevalidation = z.string().min(3, "Username should be atleast 3 character").max(15, "Username should not be more than 15 characters")


export const SignUpSchema = z.object({
    username: usernamevalidation,
    email: z.string().email({message: 'Invalid email address'}),
    password: z.string().min(6, "Password must be atleast 6 characters")
})