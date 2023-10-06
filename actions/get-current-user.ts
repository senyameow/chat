import { db } from "@/lib/db"
import getSession from "./get-session"


export const getCurrentUser = async () => {
    try {
        const session = await getSession()

        if (!session?.user?.email) return null

        // мы могли сделать вот так: return session.user, но нам это не надо, т.к. по дефолту там слишком мало даты (почта имя картинка)
        // нам нужно больше инфы, но нам все равно нужна эта сессия потому что она дает что? правииильно уникальную дату - email
        // теперь по этому емэйлу мы можем обратиться к дбшке к табличке с юзерками и найти нашего юзера, и у нас будет гораздо больше инфы про него, которая нам понадобится

        return await db.user.findUnique({
            where: {
                email: session.user.email
            },
        })

    } catch (error) {
        console.log(error)
        return null
    }
}