"use client";
import React from "react";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";
import Link from "next/link";

const page = () => {
  return (
    <Container>
      <div className={styles.returnBox}>
        <h1>Return and Refund Policy</h1>
        <p>Last Updated: [Date]</p>
        <p>
          Welcome to [Your E-Commerce Website Name] ("we," "our," or "us"). We
          want you to be completely satisfied with your purchase. Please read
          our Return and Refund Policy carefully to understand the terms and
          conditions associated with returns and refunds.
        </p>
        <p>
          <strong>Return Policy</strong>
        </p>
        <ol>
          <li>
            <p>
              <strong>Eligibility</strong>: We accept returns within [number]
              days of the purchase date. To be eligible for a return, the item
              must be unused, in the same condition as received, and in its
              original packaging.
            </p>
          </li>
          <li>
            <p>
              <strong>Return Process</strong>:
            </p>
            <ul>
              <li>
                Contact our customer support team at [contact email] to initiate
                the return process. Please provide your order number and a
                reason for the return.
              </li>
              <li>
                Our team will provide you with a return authorization (RA)
                number and instructions for returning the item.
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Return Shipping</strong>: You are responsible for the cost
              of return shipping unless the return is due to an error on our
              part. Please use a trackable shipping method to ensure the return
              is received.
            </p>
          </li>
          <li>
            <p>
              <strong>Refunds</strong>: Once we receive and inspect the returned
              item, we will notify you regarding the status of your refund. If
              approved, your refund will be processed, and a credit will be
              applied to your original payment method. Please allow [number]
              business days for the refund to appear on your statement.
            </p>
          </li>
        </ol>
        <p>
          <strong>Refund Exceptions</strong>
        </p>
        <ol>
          <li>
            <p>
              <strong>Custom or Personalized Orders</strong>: Orders for custom
              or personalized products are generally not eligible for refunds
              unless they are defective or damaged upon receipt. Please contact
              our customer support team for assistance with such orders.
            </p>
          </li>
          <li>
            <p>
              <strong>Digital Products</strong>: Orders for digital products,
              such as downloadable files or digital subscriptions, are
              non-refundable once the download or access process has begun.
            </p>
          </li>
        </ol>
        <p>
          <strong>Damaged or Defective Items</strong>
        </p>
        <p>
          If you receive a damaged or defective item, please contact us at
          [contact email] within [number] days of receiving the product. We will
          work with you to resolve the issue promptly, which may include issuing
          a replacement or a refund.
        </p>
        <p>
          <strong>Cancellations</strong>
        </p>
        <p>
          For information regarding order cancellations, please refer to our
        <Link href={"/Cancellation"}> <span className={styles.cancellationLink}>Cancellation Policy</span></Link> page.
        </p>
        <p>
          Feel free to customize this Return and Refund Policy to align with
          your specific website's needs and business practices. It's important
          to communicate your return and refund policy clearly to your customers
          to provide transparency and maintain a positive customer experience.
        </p>
      </div>
    </Container>
  );
};

export default page;
