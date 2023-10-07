'use client'
import React, { useState } from 'react'
import { Modal } from '../ui/Modal'
import { useModalStore } from '@/hooks/use-modal-store'
import { ScrollArea } from '../ui/scroll-area'
import UserCard from '../UserCard'
import { format, formatDistance, subDays } from 'date-fns'
import { usePeopleStore } from '@/hooks/use-people-store'
import InviteUser from '../InviteUser'

const UsersModal = () => {

    const { type, isOpen, onClose } = useModalStore()

    const { users, you } = usePeopleStore()

    const [people] = useState(users?.filter(user => user.id !== you?.id))

    const isModalOpen = type === 'UsersModal' && isOpen

    return (
        <Modal isOpen={isModalOpen} onClose={() => onClose()} title='People' description='Say hello to anyone!'>
            <ScrollArea className='w-full h-[420px]'>
                {people?.length! > 0 ? people?.map(user => (
                    <UserCard userId={user.id} image_url={user?.image!} name={user.name!} date={formatDistance(subDays(user.created_at, 3), new Date(), { addSuffix: true })} />
                )) : (
                    <InviteUser />
                )}
            </ScrollArea>
        </Modal>
    )
}

export default UsersModal