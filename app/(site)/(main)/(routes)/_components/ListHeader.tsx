'use client'
import { Button } from '@/components/ui/button'
import { UserPlus2 } from 'lucide-react'
import React from 'react'

const ListHeader = () => {
    return (
        <div className='w-full flex items-center justify-between pb-4'>
            <h2 className='font-bold text-3xl'>Messages</h2>
            <Button className='rounded-full bg-gray-100 py-4 px-3 hover:opacity-80' variant={'ghost'}>
                <UserPlus2 className='w-5 h-5' />
            </Button>
        </div>
    )
}

export default ListHeader