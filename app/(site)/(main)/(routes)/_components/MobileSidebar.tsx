'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

import React from 'react'
import ConversationsSidebar from "./ConversationsSidebar"
import { FullConvType } from "@/actions/get-conversations"
import { User } from "@prisma/client"

interface MobileSidebarProps {
    conversations: FullConvType[];
    user: User
}

const MobileSidebar = ({ conversations, user }: MobileSidebarProps) => {

    return (
        <Sheet>
            <SheetTrigger asChild className="block lg:hidden hover:opacity-80 transition hover:shadow-xl hover:bg-gray-100/30 cursor-pointer">
                <Menu />
            </SheetTrigger >
            <SheetContent className="p-0 w-96" side={"left"}>
                <ConversationsSidebar currentUser={user} conversations={conversations} />
            </SheetContent>
        </Sheet >
    )
}

export default MobileSidebar