import React from 'react'
import ConversationInfo from '../../_components/ConversationInfo';

interface ConversationsLayoutProps {
    children: React.ReactNode;
    params: {
        conversationId: string
    }
}

const ConversationsLayout = ({ children, params }: ConversationsLayoutProps) => {
    return (
        <div className='h-full'>
            <div className='hidden md:flex h-full w-60 z-20 flex-col inset-y-0 fixed'>
                <ConversationInfo conversationId={params.conversationId} />
            </div>
            <main className='h-full md:pl-60'>
                {children}
            </main>
        </div>
    )
}

export default ConversationsLayout