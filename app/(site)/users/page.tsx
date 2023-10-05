'use client'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

const UsersPage = () => {
    return (
        <Button onClick={() => signOut()}>
            LogOut
        </Button>
    )
}

export default UsersPage