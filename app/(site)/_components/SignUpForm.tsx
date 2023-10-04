import React from 'react'

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { Separator } from "@/components/ui/separator"
import AuthSocialButton from "./AuthSocialButton"

import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai'
import { Loader2 } from "lucide-react"

import { signUpSchema } from '@/lib/validation'
import { ISignUp } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import axios from 'axios'
import toast from 'react-hot-toast'

interface SignUpFormProps {
    toggleVariant: () => void
}

const SignUpForm = ({ toggleVariant }: SignUpFormProps) => {

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: "",
            email: '',
            password: ''
        },
    })

    const onSubmit = async (values: ISignUp) => {
        try {
            await axios.post(`/api/sign-up`, values)
            toast.success(`You've successfully created an account!`)
        } catch (error) {
            console.log(error)
            toast.error(`Something went wrong`)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-full mt-4 border p-4 rounded-xl shadow-lg">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="senyameow@mail.ru" {...field} />
                            </FormControl>
                            <FormDescription>
                                connect your account with email
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="senyameowdance" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="123zxcqwe" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={form.formState.isSubmitting} type="submit" className="w-full">
                    {form.formState.isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                    ) : 'Sign Up'}
                </Button>
                <div className="flex flex-row  items-center w-full justify-between">
                    <Separator className="flex-1" />
                    <span className="flex-1 text-neutral-400 text-sm text-center px-0 w-fit">Or continue with</span>
                    <Separator className="flex-1" />
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <AuthSocialButton onClick={() => { }} icon={AiFillGithub} />
                    <AuthSocialButton icon={AiFillGoogleCircle} onClick={() => { }} />
                </div>
                <div className="w-full flex items-center justify-center">
                    <Button disabled={form.formState.isSubmitting} type="button" onClick={toggleVariant} className="text-sm text-neutral-600 w-fit p-2 py-1" variant={'ghost'}>
                        have an account?
                    </Button>
                </div>
            </form>

        </Form>
    )
}

export default SignUpForm