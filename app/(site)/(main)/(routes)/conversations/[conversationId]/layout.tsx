import React from 'react'
import ConversationInfo from '../../_components/ConversationInfo';
import { getConversations } from '@/actions/get-conversations';

interface ConversationsLayoutProps {
    children: React.ReactNode;
    params: {
        conversationId: string
    }
}

const ConversationsLayout = async ({ children, params }: ConversationsLayoutProps) => {

    const conversations = await getConversations()

    return (
        <div className='h-full w-full'>
            <div className='hidden md:block w-full lg:w-[calc(100vw-24rem)] h-20 z-20 flex-col inset-y-0 fixed'>
                <ConversationInfo conversations={conversations} conversationId={params.conversationId} />
            </div>
            <main className='h-full w-full'>
                {children}
            </main>
        </div>
    )
}

export default ConversationsLayout