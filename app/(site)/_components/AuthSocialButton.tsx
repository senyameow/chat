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
        <button type='button' className='w-full min-h-[30px] border border-neutral-600 py-1 rounded-sm shadow-lg h-full' onClick={onClick}>
            <div className='w-full flex items-center justify-center min-h-full'>
                <Icon className='text-neutral-600' width={32} height={32} />
            </div>
        </button>
    )
}

export default AuthSocialButton