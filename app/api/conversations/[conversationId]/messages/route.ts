import { getCurrentUser } from "@/actions/get-current-user"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"


export async function POST(req: Request, { params }: { params: { conversationId: string } }) {
    try {

        const currentUser = await getCurrentUser()

        if (!currentUser?.id || !currentUser?.email) return new NextResponse('Unauthorized', { status: 401 })

        const { text } = await req.json()

        if (!text) return new NextResponse('No text provided', { status: 400 })

        const message = await db.message.create({
            data: {
                text,
                userId: currentUser.id,
                conversationId: params.conversationId
            }
        })

        return NextResponse.json(message, { status: 200 })


    } catch (error) {
        console.log(error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}