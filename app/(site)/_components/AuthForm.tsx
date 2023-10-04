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
import { loginSchema, signUpSchema } from "@/lib/validation"
import SignUpForm from "./SignUpForm"
import SignInForm from "./SignInForm"

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




    return (
        <div className="w-full">
            {variant === 'REGISTER' && <SignUpForm toggleVariant={toggleVariant} />}
            {variant === 'LOGIN' && <SignInForm toggleVariant={toggleVariant} />}
        </div>
    )
}