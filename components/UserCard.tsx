'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Avatar from './Avatar';
import { Button } from './ui/button';
import { Loader2, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useModalStore } from '@/hooks/use-modal-store';

interface UserCardProps {
    image_url?: string;
    name: string;
    date: string;
    userId: string
}

const UserCard = ({ image_url, name, date, userId }: UserCardProps) => {

    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)

    const { onClose } = useModalStore()

    const onClick = async () => {
        try {
            setIsLoading(true)
            const res = await axios.post(`/api/conversations`, { userId })
            onClose()
            router.push(`/conversations/${res.data.id}`) // вот здесь без trpc не очень удобно, там сразу видно, что прилетает, тут не супер критично, конечно, но в более сложной ситуации выручит
        } catch (error) {
            toast.error(`something went wrong`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='w-full rounded-lg border border-black p-4 hover:cursor-pointer group'>
            <div className='flex items-center gap-2 justify-between'>
                <div className='flex items-center gap-4'>
                    <Avatar image_url={image_url!} />
                    <div className='flex flex-col justify-between items-start'>
                        <span className='text-lg font-bold'>{name}</span>
                        <span className='text-sm text-neutral-500'>member since {date}</span>
                    </div>
                </div>
                <Button disabled={isLoading} onClick={onClick} className='opacity-0 transition group-hover:opacity-100' variant={'ghost'}>
                    {isLoading ? <Loader2 className='animate-spin w-6 h-6' /> : <MessageCircle className='w-6 h-6 ' />}
                </Button>

            </div>
        </div>
    )
}

export default UserCard