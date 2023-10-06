import React from 'react'
import ListHeader from './ListHeader'
import { Conversation as ConversationType } from '@prisma/client'
import { ScrollArea } from '@/components/ui/scroll-area'
import Conversation from './Conversation'
import EmptyState from '@/components/ui/EmptyState'

interface ConversationsSidebarProps {
    conversations: ConversationType[]
}

const ConversationsSidebar = ({ conversations }: ConversationsSidebarProps) => {
    return (
        <div className=' w-80 h-full border-r p-6 pb-4'>
            <ListHeader />
            {conversations.length > 0 ? <ScrollArea className='h-full w-full'>
                {conversations?.map(conv => (
                    <Conversation key={conv.id} />
                ))}
            </ScrollArea> : (
                <EmptyState />
            )}

        </div>
    )
}

export default ConversationsSidebar