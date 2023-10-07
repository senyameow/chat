'use client'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MoreHorizontal } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ConversationsSidebar from './ConversationsSidebar'
import { FullConvType } from '@/actions/get-conversations'
import { ConvType } from '@/actions/get-conversation'
import Avatar from '@/components/Avatar'
import { User } from '@prisma/client'
import UserInfo from './UserInfo'
import { getNote } from '@/actions/get-note'

interface MoreConversationProps {
    conversation: ConvType;
    name: string;
    otherUser: User | null;
}

const MoreConversation = ({ conversation, name, otherUser }: MoreConversationProps) => {


    return (
        <Sheet>
            <SheetTrigger asChild className="hover:opacity-80 transition hover:shadow-xl hover:bg-gray-100/30 cursor-pointer">
                <MoreHorizontal className='w-6 h-6 text-blue-400' />
            </SheetTrigger >
            <SheetContent className="p-0 w-96 " side={"right"}>
                <div className='absolute top-0 w-full h-[150px]'>
                    <div className='w-full absolute top-0 inset-0 bg-gray-200' />
                </div>
                <div className='absolute bottom-0 w-full h-[calc(100vh-150px)]'>
                    <div className='w-full absolute top-0 inset-0 bg-slate-900/80' />
                </div>
                <div className='px-4 py-6 pt-24 flex flex-col w-full h-full items-start gap-4 relative z-30'>
                    <Avatar image_url={otherUser?.image!} className='md:w-[80px] md:h-[80px]' trackerClassName='md:w-4 md:h-4 right-[2px] top-[2px]' />
                    <UserInfo user={otherUser!} />
                </div>
            </SheetContent>
        </Sheet >
    )
}

export default MoreConversation