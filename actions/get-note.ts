import { db } from "@/lib/db"
import getSession from "./get-session"
import { getCurrentUser } from "./get-current-user"


export const getNote = async (userId: string) => {
    try {
        const session = await getSession()

        const writer = await getCurrentUser()

        if (!session?.user?.email) return null

        console.log(writer)

        return await db.note.findFirst({
            where: {
                writerId: writer?.id,
                userId
            },
        })

    } catch (error) {
        console.log(error)
        return null
    }
}