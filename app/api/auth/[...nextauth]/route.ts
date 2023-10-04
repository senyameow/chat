import bcrypt from "bcrypt"
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from "@/lib/db"


export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, request) {
                if (!credentials?.email || !credentials.password) {
                    throw new Error('Invalid Credentials')
                }

                const user = await db.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                })

                if (!user || !user.hashedPassword) {
                    throw new Error(`Invalid credentials`)
                }

                const match = await bcrypt.compare(credentials.password, user.hashedPassword)

                if (!match) {
                    throw new Error(`Invalid Password`)
                }

                return user
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === 'development',
    adapter: PrismaAdapter(db),
    session: {
        strategy: 'jwt'
    }
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
