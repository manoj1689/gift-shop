import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from "@/app/models/User"
import NextAuth from 'next-auth'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { compare } from 'bcrypt'
import {prismaVal} from "@/app/lib/prisma"
import { error } from 'console'

const prisma = new PrismaClient();
export const Options: NextAuthOptions = {
    
    session:{
        strategy:'jwt'
    },
    providers: [
        
    CredentialsProvider({
        name: 'Sign in',
        credentials: {

          name: {
            label: 'name',
            type: 'text',
            placeholder: 'name'
          },
          email: {
            label: 'Email',
            type: 'email',
            placeholder: 'hello@example.com'
          },
          password: { label: 'Password', type: 'password' }
        },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                //const user = { id: "42", name: "Dave", password: "nextauth" }

                // if (credentials?.username === user.name && credentials?.password === user.password) {
                //     return user
                // } else {
                //     return null
                // }

                if (!credentials?.email || !credentials.password || !credentials.name) {
                    return null
                  }
                  const user = await prismaVal.user.findUnique({
                    where: {
                      name:credentials.name,
                      email: credentials.email
                    }
                  })
          
                  if (!user) {
                    return null
                  }
                //Here we need nodemailer for verify the email.
                  // if(!user.active){
                  //   throw new Error('user is not active')
                  // }
                  const isPasswordValid = await compare(
                    credentials.password,
                    user.password
                  )
          
                  if (!isPasswordValid) {
                    return null
                  }
          
                  return {
                    id: user.id + '',
                    email: user.email,
                    name: user.name,
                    randomKey: 'Hey cool'
                  }


              
                }
                
            
            
        }),GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
            }
        })
        
        ],
        callbacks: {
          session: ({ session, token }) => {
            console.log('Session Callback', { session, token })
            return {
              ...session,
              user: {
                ...session.user,
                id: token.id,
                randomKey: token.randomKey
              }
            }
          },
          redirect({ url, baseUrl }) {
            return baseUrl
          },
          jwt: ({ token, user }) => {
            console.log('JWT Callback', { token, user })
            if (user) {
              const u = user as unknown as any
              return {
                ...token,
                id: u.id,
                randomKey: u.randomKey
              }
            }
            return token
          }
        }
}

const handler = NextAuth(Options)


export { handler as GET, handler as POST }