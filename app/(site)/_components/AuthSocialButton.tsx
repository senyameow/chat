import { Button } from '@/components/ui/button';
import { Icon } from 'next/dist/lib/metadata/types/metadata-types';
import React from 'react'
import { IconType } from 'react-icons';

interface AuthSocialButtonProps {
    icon: IconType;
    onClick: () => void
}

const AuthSocialButton = ({ icon, onClick }: AuthSocialButtonProps) => {

    const Icon = icon

    return (
        <Button type='button' variant={'ghost'} className='w-full h-[30px] border border-neutral-600 py-1 rounded-sm shadow-lg' onClick={onClick}>
            <Icon className='text-gray-800 text-[20px]' />
        </Button>
    )
}

export default AuthSocialButton