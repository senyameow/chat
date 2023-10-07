'use client'
import { useModalStore } from "@/hooks/use-modal-store"
import { useEffect } from "react"


export default function Home() {

    const { onOpen, isOpen } = useModalStore()


    useEffect(() => {
        if (!isOpen) {

            onOpen('UsersModal', {})
        }

    }, [onOpen, isOpen])

    return (
        null
    )
}
