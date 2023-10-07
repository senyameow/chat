'use client'
import DeleteConversationModal from "@/components/modals/DeleteConversation"
import LogoutModal from "@/components/modals/LogoutModal"
import { MessageFileModal } from "@/components/modals/MessageFileModal"
import UsersModal from "@/components/modals/UsersModal"
import { useEffect, useState } from "react"

export const ModalProvider = () => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <>
            <MessageFileModal />
            <LogoutModal />
            <UsersModal />
            <DeleteConversationModal />
        </>
    )
}