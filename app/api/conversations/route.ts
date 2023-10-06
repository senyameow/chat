import { getCurrentUser } from "@/actions/get-current-user"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"


export async function POST(req: Request) {
    try {

        const currentUser = await getCurrentUser()

        if (!currentUser?.id || !currentUser?.email) return new NextResponse('Unauthorized', { status: 401 })

        const { userId } = await req.json() // + надо как-то захендлить создание группы

        if (!userId) return new NextResponse('No user Id provided', { status: 400 })

        // не можем создать еще один диалог, если он уже был создан (doesn't make any sense)

        let conversations = await db.conversation.findMany({
            where: {
                AND: [
                    {
                        OR: [
                            {
                                User: {
                                    some: {
                                        id: currentUser.id,
                                    },
                                },
                            },
                            {
                                User: {
                                    some: {
                                        id: userId,
                                    },
                                },
                            },
                        ],
                    },
                    {
                        OR: [
                            {
                                User: {
                                    some: {
                                        id: currentUser.id,
                                    },
                                },
                            },
                            {
                                User: {
                                    some: {
                                        id: userId,
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
            include: {
                User: true
            }
        });

        if (conversations[0]) return NextResponse.json(conversations[0], { status: 200 })


        const conversation = await db.conversation.create({
            data: {
                User: {
                    connect: [
                        { id: currentUser.id },
                        { id: userId }
                    ]
                },
            },
            include: {
                User: true
            }
        })

        return NextResponse.json(conversation, { status: 200 })

    } catch (error) {
        console.log(error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}