import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { cookies } from "next/headers"
import { User } from "next-auth"

export const authConfig: NextAuthConfig = {
    secret: `${process.env.AUTH_SECRET}`,
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID!,
            clientSecret: process.env.CLIENT_SECRET!,
            
        }),
        Credentials({
            credentials: {
                email: {label: "email", type: "email", required: true},
                password: {label: "password", type: "password", required: true},
                mode: {label: "mode", type: "text", required: true}
            },
            async authorize(credentials) {
                try {
                    const {email, password, mode} = credentials
                    const authUrl = mode === "login" ? `${process.env.API_HOST}/signin` : `${process.env.API_HOST}/signup`
                    const response = await fetch(authUrl, {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json",
                            "Access-Control-Allow-Origin": "*/*"
                        },
                        body: JSON.stringify({email, password})
                    })
            
                    const response_data = await response.json()
                    const {token_id: token} = response_data
                    
                    if (token) {
                        cookies().set("access-token", token)
                        return {token} as User
                    } else {
                        cookies().delete("access-token")
                        return null
                    }
                } catch (error) {
                    console.log('Error: ', error)
                    return null
                }
            },
        })
    ],
    callbacks: {
        async signIn ({ user, account, profile }): Promise<boolean> {
            if (account?.provider === "google") {
                if (!profile?.email_verified) return false

                try {
                    const data = {id: profile.sub as string, jti: user.id as string, email: user.email as string}
                    const url = new URL(`${process.env.API_HOST}/registeration/google`)
                    url.search = new URLSearchParams(data).toString()
                    const response = await fetch(url, {
                        method: "GET",
                        headers: {
                            "Content-type": "application/json",
                            "Access-Control-Allow-Origin": "*/*"
                        }

                    })
                    if (response) {
                        const data: {token: string} = await response.json()
                        if (!data.token) {
                            throw new Error("Server error")
                        }
                        cookies().set("access-token", data.token)
                    }
                } catch (error) {
                    cookies().delete("access-token")
                    return false
                }
            }
            return true 
        },
    },
    pages: {
        signIn: '/signup',
        error: '/login'
    }
}