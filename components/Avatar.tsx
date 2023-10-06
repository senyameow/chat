import { cn } from '@/lib/utils';
import { User } from '@prisma/client'
import Image from 'next/image';
import React from 'react'

interface AvatarProps {
    image_url?: string;
    isOnline?: boolean;
}

const Avatar = ({ image_url, isOnline }: AvatarProps) => {


    return (
        <div className='relative w-9 h-9 md:w-11 md:h-11 rounded-full'>
            <Image src={image_url! || '/images/avatar.jpg'} alt='user avatar' className='rounded-full' fill />
            <div className={cn(`rounded-full ring-2 ring-white bg-gray-300 md:w-3 md:h-3 w-2 h-2 absolute top-[1px] right-[1px]`, isOnline && 'bg-green-500')} />
        </div>
    )
}

export default Avatar