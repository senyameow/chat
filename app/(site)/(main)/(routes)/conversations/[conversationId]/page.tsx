import { getMessages } from '@/actions/get-messages'
import React from 'react'
import Body from './_components/Body'
import { MessageInput } from './_components/MessageInput'

const page = async ({ params }: { params: { conversationId: string } }) => {

    const messages = getMessages(params.conversationId)

    return (
        <div className='flex flex-col h-full'>
            <Body />
        </div>
    )
}

export default page