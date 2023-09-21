"use client";
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./page.module.css";
const page = () => {
  return (
    <Container>
      <div className={styles.paymentBox}>
        <h1>Payment, Shipping & Returns</h1>
        <br />
        <div className={styles.paymentDetailsBox}>
          <h4>PAYMENTS</h4>
          <br />
          <p>
            [website name] accepts all VISA & MasterCard branded cards for
            payments. We also accept payment via Credit Card,Debit Card,Online
            Banking,Paytm and Other Wallets.
          </p>
          <h4>SHIPPING</h4>
          <p>[website name] offers delivery in all over India.</p>

          <p>
            Customers usually receive their orders within 4-5 business days.
          </p>

          <p>
            If you have any questions about the expected delivery period for
            your address, please call us at +91 xxxxxxxxxx , xxxxxxxxxx.
          </p>

          <h4>RETURNS & Refund</h4>
        </div>
        <div>
          <h1>Return Policy:</h1>
          <div className={styles.returnPolicyBox}>
            <p>
            *Return is not applicable in customize products, the customer will get a replacement when they got any damaged or wrong product. CUSTOMER
             need to send a video while opening the courier as a proof  its mandatory . all products have 10 days warranty, 
            </p>
          </div>
          <div className={styles.returnPolicyBox}>
            <p>*The customer will get replacement delivery in 6 working days. after raising a complaint.</p>
          </div>
          <div>
            <br />
            <h5>
            Refund Policy:
            </h5>
          </div>
          <div className={styles.returnPolicyBox}>
            <p>*Refund policy is only applicable when the customer did not get their order within 8 working days.  
              in case of a refund, the money will be transferred through Paytm, phone pay, G-pay. </p>
          </div>
          <div className={styles.returnPolicyBox}>
            <p>
            *On the weekend we do all Refunds, so in case if you raise for a refund on any day of the week, your refund will be transferred on sat-sun.

            </p>
          </div>
        </div>

      </div>
    </Container>
  );
};

export default page;
