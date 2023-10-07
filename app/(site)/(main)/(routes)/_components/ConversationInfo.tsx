
import React from 'react'
import MobileSidebar from './MobileSidebar'
import { FullConvType } from '@/actions/get-conversations';
import { ConvType } from '@/actions/get-conversation';
import { User } from '@prisma/client';
import Avatar from '@/components/Avatar';
import MoreConversation from './MoreConversation';

interface ConversationInfoProps {
    conversation: ConvType;
    conversations: FullConvType[];
    currentUser: User
}

const ConversationInfo = async ({ conversation, conversations, currentUser }: ConversationInfoProps) => {

    const otherUser = conversation?.User.find(user => user.id !== currentUser.id)

    return (
        <nav className='bg-white shadow-md w-full h-full flex items-center'>
            <div className='w-full flex items-center justify-between px-4 pr-6'>
                <div className='md:hidden'>
                    <MobileSidebar user={currentUser!} conversations={conversations} />
                </div>
                <div className='flex items-center h-full gap-2'>
                    <div className='hidden md:block'>
                        <Avatar image_url={otherUser?.image!} />
                    </div>
                    <div className='flex flex-col items-start justify-between h-full'>
                        <span>{conversation?.name || otherUser?.name}</span>
                        {conversation?.isGroup ? <span className='text-sm text-neutral-400'>{conversation?.User.length} members</span> : (
                            <span className='text-sm text-neutral-400'>Inactive</span>
                        )}
                    </div>
                </div>
                <div>
                    <MoreConversation conversation={conversation} name={conversation?.name || otherUser?.name!} otherUser={conversation?.isGroup ? null : otherUser!} />
                </div>
            </div>
        </nav>
    )
}

export default ConversationInfo