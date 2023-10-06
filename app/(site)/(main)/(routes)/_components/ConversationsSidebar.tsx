import React from 'react'
import ListHeader from './ListHeader'
import { Conversation as ConversationType } from '@prisma/client'
import { ScrollArea } from '@/components/ui/scroll-area'
import Conversation from './Conversation'
import EmptyState from '@/components/ui/EmptyState'

import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { FullConvType } from '@/actions/get-conversations'


interface ConversationsSidebarProps {
    conversations: FullConvType[]
}

const ConversationsSidebar = ({ conversations }: ConversationsSidebarProps) => {

    console.log(conversations)

    return (
        <div className=' w-80 h-full border-r p-6 pb-4'>
            <ListHeader />
            {conversations.length > 0 ? <ScrollArea className='h-full w-full'>
                {conversations?.map(conv => (
                    <Conversation id={conv.id} name={conv.name!} isGroup={conv.isGroup!} lastMessageAt={conv?.lastMessageAt!} lastMessage={conv.lastMessage || ''} key={conv.id} />
                ))}
            </ScrollArea> : (
                <EmptyState />
            )}

        </div>
    )
}

export default ConversationsSidebar