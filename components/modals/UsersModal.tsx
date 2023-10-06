'use client'
import React from 'react'
import { Modal } from '../ui/Modal'
import { useModalStore } from '@/hooks/use-modal-store'
import { ScrollArea } from '../ui/scroll-area'

const UsersModal = () => {

    const { type, data, isOpen, onClose } = useModalStore()

    const tags = Array.from({ length: 50 }).map(
        (_, i, a) => `v1.2.0-beta.${a.length - i}`
    )

    const users = data?.users

    const isModalOpen = type === 'UsersModal' && isOpen

    return (
        <Modal isOpen={isModalOpen} onClose={() => onClose()} title='People' description='Say hello to anyone!'>
            <ScrollArea className='w-full h-[420px]'>
                {users?.map(user => (
                    <div className='w-full border p-2'>{user?.name}</div>
                ))}
            </ScrollArea>
        </Modal>
    )
}

export default UsersModal