import { db } from "@/lib/db";
import { NextResponse } from "next/server";

import * as bcrypt from 'bcrypt'


export async function POST(req: Request) {
    try {
        const { email, password, username } = await req.json()
        if (!email || !password || !username) return new NextResponse(`Not enough data`, { status: 400 })

        const hashedPassword = await bcrypt.hash(password, 12)

        const oldUser = await db.user.findFirst({
            where: {
                email,
            }
        })

        if (oldUser) {
            return new NextResponse(`Account with this email already exists`, { status: 400 })
        }

        const user = await db.user.create({
            data: {
                email,
                username,
                hashedPassword: hashedPassword,
            }
        })

        return NextResponse.json(user, { status: 200 })

    } catch (error) {
        return new NextResponse('Internal Error', { status: 500 })
    }
}