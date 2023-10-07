import NoteForm from '@/components/NoteForm'
import Container from '@/components/ui/Container'
import { Separator } from '@/components/ui/separator'
import { User } from '@prisma/client'
import { format } from 'date-fns'
import React from 'react'

interface UserInfoProps {
    user: User
}

const UserInfo = ({ user }: UserInfoProps) => {
    return (
        <Container>
            <div className='flex flex-col gap-[0.5px]'>
                <span className='text-white font-semibold'>{user.name}</span>
                <span className='text-white font-semibold text-sm'>#{user.id}</span>
            </div>
            <Separator />
            <div className='flex flex-col space-y-2'>
                <span className='text-white font-semibold uppercase text-[15px]'>senyacord member since</span>
                <span className='text-slate-200 text-xs '>{format(user.created_at, 'MMM dd, yyyy')}</span>
            </div>
            <Separator />
            <NoteForm />
        </Container>
    )
}

export default UserInfo