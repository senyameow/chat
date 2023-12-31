import React from 'react'
import NavigationSidebar from './(routes)/_components/NavigationSidebar'
import ConversationsSidebar from './(routes)/_components/ConversationsSidebar'
import { getConversations } from '@/actions/get-conversations'
import { getCurrentUser } from '@/actions/get-current-user'

const layout = async ({ children }: { children: React.ReactNode }) => {

    // здесь фетчим диалоги юзера, прокидываем их в компонент, не забыть захендлить если список пустой
    // фетчим с помощью хз либо action либо просто дбшкой тут
    // можно если список пустой сосздать раут типо инвайт, и туда перекинуть (раут внутри этого лэйаута чтобы остались сайдбары)
    // там уже сделать страничку для приглоса + не будет лэйаута для диалога отдельно (что мне и надо)
    // уже в компоненте обрабатываем этот список как-то

    const conversations = await getConversations()

    const currentUser = await getCurrentUser()

    return (
        <div className='h-full'>

            <div className='hidden lg:flex h-full w-96 z-50 flex-row fixed inset-y-0'>
                <NavigationSidebar />
                <ConversationsSidebar currentUser={currentUser!} conversations={conversations} />
            </div>
            <main className='lg:pl-96 lg:pt-20 h-full'>
                {children}
            </main>
        </div>
    )
}

export default layout