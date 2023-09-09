
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/Header/page'
import Footer from '@/Footer/page'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })
import AuthProvider from './context/page'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
        <Head>
 
        </Head>
      <AuthProvider>
      <Header/>
       
       {children}
     
     
       <Footer/>

      </AuthProvider>
        

        
       
        </body>
    </html>
  )
}
