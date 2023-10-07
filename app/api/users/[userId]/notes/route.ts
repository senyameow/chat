

import { getCurrentUser } from "@/actions/get-current-user"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"


export async function POST(req: Request, { params }: { params: { userId: string } }) {
    try {

        const currentUser = await getCurrentUser()

        if (!currentUser?.id || !currentUser?.email) return new NextResponse('Unauthorized', { status: 401 })

        const { text } = await req.json() // + надо как-то захендлить создание группы

        if (!params.userId) return new NextResponse('No user Id provided', { status: 400 })

        let note = await db.note.findFirst({
            where: {
                userId: params.userId,
                writerId: currentUser.id
            }
        })

        if (!note) {
            note = await db.note.create({
                data: {
                    text,
                    userId: params.userId,
                    writerId: currentUser.id
                }
            })
        }

        note = await db.note.update({
            where: {
                id: note.id
            },
            data: {
                text
            }
        })



        return NextResponse.json(note, { status: 200 })

    } catch (error) {
        console.log(error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}