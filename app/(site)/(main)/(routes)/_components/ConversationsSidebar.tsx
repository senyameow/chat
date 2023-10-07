'use client'
import React, { useEffect } from 'react'
import ListHeader from './ListHeader'
import { Conversation as ConversationType, User } from '@prisma/client'
import { ScrollArea } from '@/components/ui/scroll-area'
import Conversation from './Conversation'
import EmptyState from '@/components/ui/EmptyState'

import { FullConvType } from '@/actions/get-conversations'
import { usePeopleStore } from '@/hooks/use-people-store'


interface ConversationsSidebarProps {
    conversations: FullConvType[];
    currentUser: User;
}

const ConversationsSidebar = ({ conversations, currentUser }: ConversationsSidebarProps) => {

    const { onStoreYou } = usePeopleStore()

    useEffect(() => {
        onStoreYou({ user: currentUser })
    }, [currentUser])

    return (
        <div className=' w-80 h-full lg:border-r p-6 pb-4'>
            <ListHeader />
            {conversations.length > 0 ? <ScrollArea className='h-full w-full'>
                {conversations?.map(conv => (
                    <Conversation currentUser={currentUser} conversation={conv} key={conv.id} />
                ))}
            </ScrollArea> : (
                <EmptyState />
            )}

        </div>
    )
}

export default ConversationsSidebar