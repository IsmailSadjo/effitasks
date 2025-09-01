import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/prisma";
import bcrypt from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers : [Google({
        authorization: {
            params: {
                prompt: "select_account"
            }
        }
    }),
    Credentials({
        name: "credentials",
        credentials: {
            email: {},
            password: {}
        },
        authorize: async (credentials) => {
           if (!credentials.email || !credentials.password) return null

           const existingUser = await prisma.user.findUnique({
            where: {
                email: credentials.email,
            }
           })

           if(!existingUser || !existingUser.password) return null

           const isValid = await bcrypt.compare(credentials.password, existingUser.password)

           if(!isValid) return null

           return {
            id: existingUser.id,
            email: existingUser.email,
            image: existingUser.image,
            name: existingUser.name
           }
        }
    })],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({session, token}) {
            if (token) {
                session.user.id = token.id
            }
            return session
        }
    }
})