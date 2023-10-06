import { User } from '@prisma/client'
import Image from 'next/image';
import React from 'react'

interface AvatarProps {
    user?: User;
}

const Avatar = ({ user }: AvatarProps) => {


    return (
        <div className='relative w-9 h-9 md:w-11 md:h-11 rounded-full cursor-pointer'>
            <Image src={user?.image! || '/images/avatar.jpg'} alt='user avatar' className='rounded-full' fill />
        </div>
    )
}

export default Avatar