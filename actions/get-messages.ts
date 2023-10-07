import { db } from "@/lib/db"
import getSession from "./get-session"


export const getMessages = async (conversationId: string) => {
    try {
        const session = await getSession()

        if (!session?.user?.email) return []

        const messages = await db.message.findMany({
            where: {
                conversationId
            },
            include: {
                seen: true,
                user: true,
            },
            orderBy: {
                created_at: 'asc'
            }
        })

        return messages

    } catch (error) {
        console.log(error)
        return []
    }
}

export type MessageType = Awaited<ReturnType<typeof getMessages>>[0]