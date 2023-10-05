"use client"
import styles from "./page.module.css";
import HomeHead from "@/app/Home/page.jsx";
import Categories from "@/app/Categories/page"
import BestSelling from "@/app/bestSelling/Page"
import Recent from "@/app/Recent/page"
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { signIn,signOut } from "next-auth/react";
import Button from 'react-bootstrap/Button';
export default function Home() {
 const {data:session}=useSession(
  {require:true,
  onUnauthenticated(){
    redirect('/')
  }}

 )
  return (
    <>
     <HomeHead  />
      <div className={styles.homeHead}>
     
       {session?User({session}):Guest()}
      </div>
    </>
  );
}

function Guest(){
  return (
    <div>
      <h1> Guest Home Page</h1>
     
      <Link href="/api/auth/signin">SignIn</Link>
    </div>
  )
}

function User({session}){
  async function GoogleSignOut(){
    signOut({redirect: "/", callbackUrl: "http://localhost:3000"})
  }
  return (
    <div>
      {/* <h1> User Home Page</h1>
      <h3>{session.user.name}</h3> */}
     
      <BestSelling/>
      <div><Categories/> </div>
      <Recent/>
{/*     
      <Button variant="light" type="button" onClick={GoogleSignOut}>SignOut </Button> */}
    </div>
  )
}