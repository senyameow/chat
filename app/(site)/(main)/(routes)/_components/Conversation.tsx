import React from 'react'

// че надо? надо понимать группа или 1 чел
// имя
// ласт смска
// время последней смски
// онлайн ли пацан
// айдишник чтобы переходить на страничку этого диалога


interface ConversationProps {
    id: string;
    name: string;
    isGroup: boolean;
    lastMessageAt: string;
    lastMessage: string;
}

const Conversation = ({ id, name, isGroup, lastMessage, lastMessageAt }: ConversationProps) => {


    return (
        <div>Conversation</div>
    )
}

export default Conversation