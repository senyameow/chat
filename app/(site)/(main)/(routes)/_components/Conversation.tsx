import { FullConvType } from '@/actions/get-conversations';
import { CurrentUser, getCurrentUser } from '@/actions/get-current-user';
import Avatar from '@/components/Avatar';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';
import React, { useMemo } from 'react'
import DeleteChatButton from './DeleteChatButton';

// че надо? надо понимать группа или 1 чел
// имя
// ласт смска
// время последней смски
// онлайн ли пацан
// айдишник чтобы переходить на страничку этого диалога


interface ConversationProps {
    conversation: FullConvType;
    currentUser: CurrentUser
}

const Conversation = ({ conversation, currentUser }: ConversationProps) => {


    const lastMessage = useMemo(() => {
        const messages = conversation?.Message || []
        return messages?.[messages.length - 1]
    }, [conversation.Message])

    const otherUser = useMemo(() => {
        return conversation.User.find(user => user?.id !== currentUser?.id)
    }, [conversation.User])

    return (
        <Link href={`/conversations/${conversation.id}`} className='w-full h-full cursor-pointer group transition relative'>
            <div className='p-2 flex flex-row justify-between items-start w-full group-hover:bg-gray-100 rounded-xl'>
                <div className='flex items-start flex-row gap-2'>
                    <Avatar />
                    <div className='flex flex-col items-start justify-between gap-2'>
                        <span className='font-bold text-[16px]'>{conversation.name || otherUser?.name}</span>
                        <span className='text-xs text-neutral-500 '>
                            {lastMessage?.text ? lastMessage?.text : 'conversation created'}
                        </span>
                    </div>
                </div>
                <span className='text-neutral-400 text-sm'>{format(conversation.lastMessageAt!, 'p')}</span>
            </div>
            <DeleteChatButton id={conversation?.id} />
        </Link>
    )
}

export default Conversation