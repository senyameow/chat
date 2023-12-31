import React from 'react'
import SidebarRoutes from './SidebarRoutes'
import { getCurrentUser } from '@/actions/get-current-user'
import CurrentUserButton from './CurrentUserButton'
import { getUsers } from '@/actions/get-users'



const NavigationSidebar = async () => {

    const user = await getCurrentUser() // безем юзера, чтобы сделать аватарку! Наверное надо сделать сначала компонент, потому что я хочу переиспользовать для других юзеров ее

    const users = await getUsers()

    return (
        <div className='space-y-2 h-full border-r px-2 pt-2 pb-4 flex flex-col justify-between'>
            <div className='flex items-center space-y-2 flex-col'>
                <SidebarRoutes users={users!} />
            </div>
            <CurrentUserButton user={user!} />
        </div>
    )
}

export default NavigationSidebar