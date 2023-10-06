'use client'
import React from 'react'

import { ActionTooltip } from '@/components/ActionTooltip'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeftFromLine, MessageCircle, Users } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useModalStore } from '@/hooks/use-modal-store'
import { User } from '@prisma/client'

interface SidebarRoutesProps {
    users: User[]
}

const SidebarRoutes = ({ users }: SidebarRoutesProps) => {

    const { onOpen } = useModalStore()

    const pathname = usePathname()

    return (
        <>
            <ActionTooltip label='messages' side='right'>
                <Link href={'/conversations'} className={cn(`${buttonVariants({ variant: 'ghost' }), 'py-3 px-3 rounded-lg'}`, (pathname === '/conversations' || pathname.startsWith('/conversations')) && `bg-gray-100`)}>
                    <MessageCircle className='w-6 h-6 text-blue-500' />
                </Link>
            </ActionTooltip>
            <ActionTooltip label='people' side='right'>
                <Button onClick={() => { onOpen('UsersModal', { users }) }} className={`py-3 px-3 rounded-lg`} variant={'ghost'}>
                    <Users className='w-6 h-6 text-lime-500' />
                </Button>
            </ActionTooltip>
            <ActionTooltip label='leave' side='right'>
                <Button onClick={() => { onOpen('logOut', {}) }} className={`py-3 px-3 rounded-lg`} variant={'ghost'}>
                    <ArrowLeftFromLine className='w-6 h-6 text-rose-500' />
                </Button>
            </ActionTooltip>
        </>
    )
}

export default SidebarRoutes