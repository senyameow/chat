import React from 'react'
import NavigationSidebar from './(routes)/_components/NavigationSidebar'
import ConversationsSidebar from './(routes)/_components/ConversationsSidebar'
import Navbar from './(routes)/_components/Navbar'

const layout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='h-full'>
            <div className='h-20 flex inset-y-0 fixed z-20 w-full lg:pl-[305px]'>
                <Navbar />
            </div>
            <div className='hidden lg:flex h-full w-80 z-50 flex-row fixed inset-y-0'>
                <NavigationSidebar />
                <ConversationsSidebar />
            </div>
            <main className='lg:pl-80 lg:pt-20 h-full'>
                {children}
            </main>
        </div>
    )
}

export default layout