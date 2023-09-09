"use client";

import React from "react";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "@/Footer/page.module.css";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col sm className={styles.footerTopBox}>
            <div>
              <Image
                src="/secure.png"
                width={50}
                height={44}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.footerTopContent1}>
              100% SAFE & SECURE PAYMENTS
            </div>

            <p className={styles.p}>Pay using secure payment methods</p>
          </Col>
          <Col sm className={styles.footerTopBox}>
            <div>
              <Image
                src="/help.png"
                width={50}
                height={44}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.footerTopContent1}>
              DEDICATED HELP CENTER
            </div>

            <p className={styles.p}>
              Call us +91xxx-xxx-xxxx 10:30 AM to 6:30 PM
            </p>
          </Col>
          <Col sm className={styles.footerTopBox}>
            <div>
              <Image
                src="/android.png"
                width={50}
                height={44}
                alt="Picture of the author"
              />
            </div>

            <div className={styles.footerTopContent1}>SHOP ON THE GO</div>

            <p className={styles.p}>Download Mobile App</p>
          </Col>
        </Row>
      </Container>

      <Row>
        <Col sm={1} className={styles.footerMidBox}>
          {" "}
          <Link className={styles.a}  href={"/About"}>About Us</Link>
        </Col>
        <Col sm={1} className={styles.footerMidBox}>
          {" "}
          <Link className={styles.a}  href={"/Policy"}>Privacy Policy</Link>
        </Col>
        <Col sm={2} className={styles.footerMidBox}>
          <Link className={styles.a} href={"/Term&cond"}>Terms And Conditions</Link>
        </Col>
        <Col sm={2} className={styles.footerMidBox}>
          <Link className={styles.a} href={"/Payments"}>Payment, Shipping & Returns</Link>
        </Col>
        <Col sm={2} className={styles.footerMidBox}>
          {" "}
          <Link className={styles.a}  href={"/Cancellation"}>Cancellation Policy</Link>
        </Col>
        <Col sm={1} className={styles.footerMidBox}>
          <Link className={styles.a}  href={"/Return"}>Return & Refund</Link>
        </Col>
        <Col sm={1} className={styles.footerMidBox}>
          {" "}
          <Link className={styles.a} href={"/Review"}>Review Us</Link>
        </Col>
      <Col sm={2} className={styles.footerMidBox}></Col>
        
      </Row>
      <Container fluid>
      <Row className={styles.footerBottomBox}>
        <Col sm>
        <div className={styles.footerBottomCopyRight}>
        © 2023@COPYRIGHT All Rights Reserved By GiftShop .
        </div>
        </Col>
        <Col sm >
        <div className={styles.footerSocialIcons}>
          <div className={styles.footerTagline}>Keep In Touch</div>
          <div className={styles.paymentLogo}>
          <Image
                src="/instagram.png"
                width={50}
                height={40}
                alt="instagram"
              />
          </div>
          <div className={styles.paymentLogo}>
          <Image
                src="/facebook.png"
                width={40}
                height={40}
                alt="facebook"
              />
          </div>
          <div className={styles.paymentLogo}>
          <Image
                src="/youtube.png"
                width={50}
                height={40}
                alt="youtube"
              />
          </div>
          <div className={styles.paymentLogo}> 
          <Image
                src="/pInterest.png"
                width={40}
                height={40}
                alt="Picture of the author"
              />
          </div>
        </div>
        </Col>
        <Col sm>
       
        
          <div className={styles.paymentList}  >
          <Image
          
                src="/payment.png"
                width={367}
                height={40}
                alt="payment"
               
                
                layout="responsive"
              />
          </div>
          
        </Col>
      </Row>

      </Container>
      
    </>
  );
};

export default Footer;
