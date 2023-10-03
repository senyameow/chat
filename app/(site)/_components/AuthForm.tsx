"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

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
import { useCallback, useState } from 'react'

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email('invalid email').min(1, ' '),
    password: z.string().min(1, ' ')
})

type Variant = 'REGISTER' | 'LOGIN'

export function AuthForm() {

    const [variant, setVariant] = useState<Variant>('LOGIN')

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }
    }, [variant])

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: '',
            password: ''
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {

    }

    return (
        <div className="w-full">
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
                    {variant === 'REGISTER' && <FormField
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
                    />}
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
                    <Button disabled={form.formState.isLoading} type="submit" className="w-full">
                        {form.formState.isLoading ? (
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                        ) : variant === 'LOGIN' ? 'Sign In' : 'Sign Up'}
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
                        <Button type="button" onClick={toggleVariant} className="text-sm text-neutral-600 w-fit p-2 py-1" variant={'ghost'}>
                            {variant === 'LOGIN' ? (
                                'new to messenger?'
                            ) : 'have an account?'}
                        </Button>
                    </div>
                </form>

            </Form>
        </div>
    )
}