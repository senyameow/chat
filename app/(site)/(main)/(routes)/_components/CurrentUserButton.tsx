'use client'
import Avatar from '@/components/Avatar'
import { User } from '@prisma/client'
import React, { useState } from 'react'

interface CurrentUserButtonProps {
    user: User
}

const CurrentUserButton = ({ user }: CurrentUserButtonProps) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <button onClick={() => setIsOpen(!isOpen)} className='transition cursor-pointer hover:opacity-80'>
            <Avatar user={user} isOnline />
        </button>
    )
}

export default CurrentUserButton