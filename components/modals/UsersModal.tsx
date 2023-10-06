'use client'
import React from 'react'
import { Modal } from '../ui/Modal'
import { useModalStore } from '@/hooks/use-modal-store'
import { ScrollArea } from '../ui/scroll-area'
import UserCard from '../UserCard'
import { format, formatDistance, subDays } from 'date-fns'

const UsersModal = () => {

    const { type, data, isOpen, onClose } = useModalStore()

    const users = data?.users

    const isModalOpen = type === 'UsersModal' && isOpen

    return (
        <Modal isOpen={isModalOpen} onClose={() => onClose()} title='People' description='Say hello to anyone!'>
            <ScrollArea className='w-full h-[420px]'>
                {users?.map(user => (
                    <UserCard userId={user.id} image_url={user?.image!} name={user.name!} date={formatDistance(subDays(user.created_at, 3), new Date(), { addSuffix: true })} />
                ))}
            </ScrollArea>
        </Modal>
    )
}

export default UsersModal