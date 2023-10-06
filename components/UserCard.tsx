import Image from 'next/image'
import React from 'react'
import Avatar from './Avatar';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';

interface UserCardProps {
    image_url?: string;
    name: string;
    date: string;
}

const UserCard = ({ image_url, name, date }: UserCardProps) => {
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
                <Button className='opacity-0 transition group-hover:opacity-100' variant={'ghost'}>
                    <MessageCircle className='w-6 h-6 ' />
                </Button>

            </div>
        </div>
    )
}

export default UserCard