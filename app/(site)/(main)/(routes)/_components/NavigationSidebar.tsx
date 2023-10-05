import React from 'react'
import SidebarRoutes from './SidebarRoutes'



const NavigationSidebar = async () => {

    return (
        <div className='space-y-2 h-full border-r px-2 pt-2 pb-4'>
            <div className='flex items-center space-y-2 flex-col'>
                <SidebarRoutes />
            </div>

        </div>
    )
}

export default NavigationSidebar