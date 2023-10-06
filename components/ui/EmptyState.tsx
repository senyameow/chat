import { Ghost } from 'lucide-react'
import React from 'react'

const EmptyState = () => {
    return (
        <div className='h-full w-full flex flex-col items-center justify-center text-center'>
            <Ghost className='h-6 w-6 animate-bounce' />
            <span className='italic text-sm '>Oooops... Only ghost here</span>
        </div>
    )
}

export default EmptyState