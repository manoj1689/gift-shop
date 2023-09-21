'use client'
import React from 'react'
import styles from "./page.module.css";
import { Container } from "react-bootstrap";
import Link from "next/link";
import Image from 'next/image';
const page = () => {
  return (
    <Container >
      <div className={styles.reviewBox}>
      <h1>Review Us</h1>
      <div className={styles.reviewUsCashBack}> <p>Review and Get XXXX Rs Paytm Now</p></div>
      <div>
      <Link href={"/reviewGoogle"}>
      <div className={styles.googleReviewBox}>
       
        <Image
              width={300}
              height={80}
              alt="Mountains"
              src="/review.png"
             
            />
       
      </div>
      </Link>  
      <br />
      <br />

     </div>
     </div>
      
    </Container>
   
  )
}

export default page