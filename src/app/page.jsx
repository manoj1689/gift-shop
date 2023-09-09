"use client"
import styles from "./page.module.css";
import HomeHead from "@/app/Home/page.jsx";
import Categories from "@/app/Categories/page"
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function Home() {
 const {data:session}=useSession(
  {require:true,
  onUnauthenticated(){
    redirect('/about')
  }}
 )
  return (
    <>
     <HomeHead />
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
     
      <Link href="/Pages/login"></Link>
    </div>
  )
}

function User({session}){
  return (
    <div>
      <h1> User Home Page</h1>
      <h3>{session.user.name}</h3>
      <div><Categories/> </div>
      <Link href="/profile">Profile Page</Link>
    </div>
  )
}