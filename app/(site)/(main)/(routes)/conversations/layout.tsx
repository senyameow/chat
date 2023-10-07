import { getCurrentUser } from "@/actions/get-current-user"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"

export default async function SetupLayout({ children }: { children: React.ReactNode }) {

    const user = await getCurrentUser()

    const conversation = await db.conversation.findFirst({
        where: {
            User: {
                some: {
                    id: user?.id!
                }
            }
        }
    })



    if (conversation) {
        redirect(`/conversations/${conversation.id}`)
    }

    return (
        <>
            {children}
        </>
    )
}