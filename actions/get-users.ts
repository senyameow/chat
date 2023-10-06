import { db } from "@/lib/db"
import getSession from "./get-session"


export const getUsers = async () => {
    try {
        const session = await getSession()

        if (!session?.user?.email) return null

        return await db.user.findMany({
            where: {
                NOT: {
                    email: session.user.email
                }
            },
            orderBy: {
                created_at: 'desc'
            }
        })

    } catch (error) {
        console.log(error)
        return []
    }
}