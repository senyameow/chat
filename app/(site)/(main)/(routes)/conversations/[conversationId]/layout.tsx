import React from 'react'
import ConversationInfo from '../../_components/ConversationInfo';
import { getConversations } from '@/actions/get-conversations';
import { getConversation } from '@/actions/get-conversation';
import { getCurrentUser } from '@/actions/get-current-user';
import { MessageInput } from './_components/MessageInput';

interface ConversationsLayoutProps {
    children: React.ReactNode;
    params: {
        conversationId: string
    }
}

const ConversationsLayout = async ({ children, params }: ConversationsLayoutProps) => {

    const conversations = await getConversations()

    const conversation = await getConversation(params.conversationId)

    const currentUser = await getCurrentUser()


    return (
        <div className='h-full w-full'>
            <div className='hidden md:block w-full lg:w-[calc(100vw-24rem)] h-20 z-20 flex-col inset-y-0 fixed'>
                <ConversationInfo currentUser={currentUser!} conversations={conversations} conversation={conversation} />
            </div>
            <main className='h-[90%] w-full px-6 py-4 -pb-12'>
                {children}
                <MessageInput conversationId={params.conversationId} type={conversation?.isGroup ? 'group' : 'conversation'} />
            </main>
        </div>
    )
}

export default ConversationsLayout