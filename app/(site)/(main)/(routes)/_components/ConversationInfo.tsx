'use client'
import React from 'react'
import MobileSidebar from './MobileSidebar'
import { Button } from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-react'

interface ConversationInfoProps {
    conversationId: string;
}

const ConversationInfo = ({ conversationId }: ConversationInfoProps) => {
    return (
        <nav className=' bg-white w-full shadow-md flex items-center justify-center'>
            <div className='flex items-center justify-between px-4 pr-6 w-full'>
                <MobileSidebar />
                <div className='flex items-center h-full gap-2'>
                    <div className='w-12 h-12 rounded-full bg-rose-400' />
                    <div className='flex flex-col items-start justify-between h-full'>
                        <span>Title</span>
                        <span>X members</span>
                    </div>
                </div>
                <div>
                    <Button variant={'ghost'} onClick={() => { }}>
                        <MoreHorizontal className='w-6 h-6 text-blue-400' />
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default ConversationInfo