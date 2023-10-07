'use client'
import { MessageType } from '@/actions/get-messages'
import EmptyState from '@/components/ui/EmptyState'
import { Ghost } from 'lucide-react'
import React, { ElementRef, useRef, useState } from 'react'
import Message from './Message'

interface BodyProps {
    initialMessages: MessageType[]
}

const Body = ({ initialMessages }: BodyProps) => {

    const [messages, setMessages] = useState(initialMessages)

    const chatRef = useRef<ElementRef<'div'>>(null)
    const bottomRef = useRef<ElementRef<'div'>>(null)

    return (
        <div className='flex-1 overflow-y-auto'>
            {messages.length === 0 && <EmptyState icon={Ghost} text='Start converstaion right now!' />}
            {messages?.map((message, ind) => (
                <Message message={message} key={message.id} />
            ))}
            <div ref={bottomRef} className='pt-24' />
        </div>
    )
}

export default Body