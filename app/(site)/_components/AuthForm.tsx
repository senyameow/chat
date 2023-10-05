"use client"

import { useCallback, useEffect, useState } from 'react'
import SignUpForm from "./SignUpForm"
import SignInForm from "./SignInForm"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

type Variant = 'REGISTER' | 'LOGIN'

export function AuthForm() {

    const [variant, setVariant] = useState<Variant>('LOGIN')

    const session = useSession()

    const router = useRouter()

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }
    }, [variant])

    useEffect(() => {
        if (session.status === 'authenticated') {
            router.push('/users')
        }
    }, [session.status, router])


    return (
        <div className="w-full">
            {variant === 'REGISTER' && <SignUpForm toggleVariant={toggleVariant} />}
            {variant === 'LOGIN' && <SignInForm toggleVariant={toggleVariant} />}
        </div>
    )
}