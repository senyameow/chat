
import React from 'react'
import MobileSidebar from './MobileSidebar'
import { Button } from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-react'
import { FullConvType } from '@/actions/get-conversations';
import { getCurrentUser } from '@/actions/get-current-user';

interface ConversationInfoProps {
    conversationId: string;
    conversations: FullConvType[];
}

const ConversationInfo = async ({ conversationId, conversations }: ConversationInfoProps) => {

    const currentUser = await getCurrentUser()

    return (
        <nav className='bg-white shadow-md w-full h-full flex items-center'>
            <div className='w-full flex items-center justify-between px-4 pr-6'>
                <MobileSidebar user={currentUser!} conversations={conversations} />
                <div className='flex items-center h-full gap-2'>
                    <div className='w-12 h-12 rounded-full bg-rose-400' />
                    <div className='flex flex-col items-start justify-between h-full'>
                        <span>Title</span>
                        <span>X members</span>
                    </div>
                </div>
                <div>
                    <Button variant={'ghost'}>
                        <MoreHorizontal className='w-6 h-6 text-blue-400' />
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default ConversationInfo