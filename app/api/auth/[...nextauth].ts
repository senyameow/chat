
import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from "@/lib/db";
import CredentialsProvider from 'next-auth/providers/credentials'
import * as bcrypt from 'bcrypt'


const options = {
    providers: [
        Github({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        Google({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "senyameow@gmail.com",
                },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials, request) => {
                if (!credentials?.email || !credentials.password) throw new Error('Invalid Credentials')

                const user = await db.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                })

                if (!user || !user.hashedPassword) throw new Error(`Invalid credentials`)

                const match = await bcrypt.compare(credentials.password, user.hashedPassword)

                if (!match) throw new Error(`Invalid Password`)

                return user
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt' as const
    }
};

const handler = NextAuth(options)

export {
    handler as GET,
    handler as POST
}