'use client'
import React from 'react'
import { Modal } from '../ui/Modal'
import { useModalStore } from '@/hooks/use-modal-store'
import { DialogFooter } from '../ui/dialog'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'

const LogoutModal = () => {

    const { isOpen, type, onClose } = useModalStore()

    const isModalOpen = type === 'logOut' && isOpen


    return (
        <Modal isOpen={isModalOpen} onClose={() => onClose()} title='Are You sure about logging out?' description='you will be redirected to Sign In page'>

            <DialogFooter className='w-full  bg-white'>
                <div className='flex flex-row justify-between items-center w-full'>
                    <Button variant={'ghost'} onClick={() => onClose()} className='bg-transparent text-white hover:text-white hover:bg-indigo-500/90 font-bold bg-indigo-500'>
                        Cancel
                    </Button>
                    <Button disabled={false} onClick={() => signOut()} className='text-white hover:text-white hover:bg-rose-500/90 font-bold bg-rose-500'>
                        Log Out
                    </Button>
                </div>
            </DialogFooter>
        </Modal>
    )
}

export default LogoutModal