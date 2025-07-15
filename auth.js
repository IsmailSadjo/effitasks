import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers : [Google, Credentials({
        credentials: {
            email: {},
            password: {}
        },
        authorize: async (credentials) => {
            let user = {email: "birthyear@example.com", password: "2004", name: "Test"};

            if(credentials?.email === user.email && credentials?.password === user.password) {
                console.log(user)
                return user;
            }else {
                return null
            }
        }
    })]
})