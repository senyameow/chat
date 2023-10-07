import { db } from "@/lib/db"
import getSession from "./get-session"


export const getConversation = async (id: string) => {
    try {
        const session = await getSession()

        if (!session?.user?.email) return null

        const conversation = await db.conversation.findUnique({
            where: {
                id
            },
            include: {
                User: true
            }
        })

        return conversation

    } catch (error) {
        console.log(error)
        return null
    }
}

export type ConvType = Awaited<ReturnType<typeof getConversation>>