"use client";
import React from "react";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";

const page = () => {
  return (
    <Container>
      <div className={styles.cancellationBox}>
        <h1>Cancellation Policy</h1>
        <p>Last Updated: [Date]</p>
        <p>
          Welcome to [Your Website Name] ("we," "our," or "us"). We understand
          that circumstances may change, and you may need to cancel your order.
          Please read our Cancellation Policy carefully to understand the terms
          and conditions associated with canceling an order.
        </p>
        <p>
          <strong>Order Cancellation</strong>
        </p>
        <ol>
          <li>
            <p>
              <strong>Cancellation Period</strong>: You have the right to cancel
              your order within [number] hours of placing it. After this period,
              your order may have already been processed and shipped, and our
              standard return policy will apply.
            </p>
          </li>
          <li>
            <p>
              <strong>Cancellation Request</strong>: To cancel your order,
              please contact our customer support team at [contact email] as
              soon as possible. Please provide your order number and a reason
              for cancellation.
            </p>
          </li>
          <li>
            <p>
              <strong>Refunds</strong>: If your order is canceled within the
              specified cancellation period, you will receive a full refund to
              the original payment method used for the purchase. Please allow
              [number] business days for the refund to be processed.
            </p>
          </li>
        </ol>
        <p>
          <strong>Exceptions</strong>
        </p>
        <ol>
          <li>
            <p>
              <strong>Custom or Personalized Orders</strong>: Orders for custom
              or personalized products may not be eligible for cancellation once
              production has begun. Please contact our customer support team to
              discuss your options.
            </p>
          </li>
          <li>
            <p>
              <strong>Digital Products</strong>: Orders for digital products,
              such as downloadable files or digital subscriptions, are
              non-refundable and may not be canceled once the download or access
              process has begun.
            </p>
          </li>
        </ol>
        <p>
          <strong>Changes to Orders</strong>
        </p>
        <p>
          If you wish to make changes to your order, such as updating the
          shipping address or modifying the products ordered, please contact us
          as soon as possible. We will do our best to accommodate your request,
          but changes may not be possible if the order has already been
          processed or shipped.
        </p>
        <p>
          <strong>Contact Us</strong>
        </p>
        <p>
          If you have any questions or need assistance with canceling an order
          or making changes to your order, please contact our customer support
          team at [contact email]. We are here to help and will respond to your
          inquiries promptly.
        </p>
        <p>
          <strong>Review of Policy</strong>
        </p>
        <p>
          This Cancellation Policy may be updated or modified by us from time to
          time without notice. It is your responsibility to review this policy
          periodically for any changes.
        </p>
        <p>
          [Your Name]
          <br /> [Your Title] <br /> [Your Website Name] <br /> [Contact Email]{" "}
          <br /> [Contact Address]
          <br /> [Phone Number]
        </p>
        <br />
        <p>
          Feel free to customize this cancellation policy to align with your
          specific website's needs and business practices. It's essential to
          communicate your cancellation policy clearly to your customers to
          provide transparency and maintain a positive customer experience.
        </p>
      </div>
    </Container>
  );
};

export default page;
