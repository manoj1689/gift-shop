'use client'
import React from "react";
import { Container } from "react-bootstrap";
import styles from "./page.module.css";
const page = () => {
  return (
    <Container>
      <div className={styles.aboutBox}>
      <h1>About Us</h1>
      <p>
        Welcome to [Your Gift Shop Name], your one-stop destination for
        thoughtful and unique gifts that make every occasion special. We are
        more than just an online gift shop. we are your partners in spreading
        joy and creating cherished memories.
      </p>
      <p>
        At [Your Gift Shop Name], we believe that gifting is an art form that
        allows you to express your love, appreciation, and emotions in a
        tangible way. That is why we have curated a handpicked selection of
        gifts that are as meaningful as they are beautiful. Whether you're
        celebrating a birthday, anniversary, wedding, or simply want to brighten
        someone day, we have the perfect gift waiting for you.
      </p>
      <h3>Our Mission</h3>
      <p>
        Our mission is simple: to help you make every moment memorable. We know
        that finding the right gift can be a daunting task, which is why we've
        taken the guesswork out of the equation. Our team of gift experts scours
        the globe to find the most delightful and unique gifts, ensuring that
        each item in our collection is a true gem.
      </p>
      <h3>What Sets Us Apart</h3>
      <ul className={styles.ul}>
        <li>
          <span>
            <h5>Unique Selection:</h5>
            <p>
              Our catalog is a treasure trove of unique and carefully selected
              gifts that you won't find in your average store. From handcrafted
              jewelry to personalized keepsakes, we have something for everyone.
            </p>
          </span>
        </li>
        <li>
          <span>
            <h5>Quality Assurance:</h5>
            <p>
              We are committed to providing you with products of the highest
              quality. Each item in our store undergoes rigorous quality checks
              to ensure it meets our standards of excellence.
            </p>
          </span>
        </li>
        <li>
          <span>
            <h5>Personalization:</h5>
            <p>
              Many of our products can be personalized to add that extra special
              touch. Engrave a name, date, or heartfelt message to create a gift
              that's truly one-of-a-kind.
            </p>
          </span>
        </li>
        <li>
          <span>
            <h5>Exceptional Service:</h5>
            <p>
              We pride ourselves on providing exceptional customer service. Our
              friendly and knowledgeable team is always here to assist you,
              whether you have questions about products, need gift ideas, or
              require assistance with an order.
            </p>
          </span>
        </li>
        <li>
          <span>
            <h5>Fast and Secure Shipping:</h5>
            <p>
              We understand the excitement of receiving a gift, which is why we
              offer fast and secure shipping options to ensure your gift arrives
              on time and in perfect condition.
            </p>
          </span>
        </li>
      </ul>
    <h3>
    Our Commitment
    </h3>
    <p>
    At [Your Gift Shop Name], we are committed to making your gift-giving experience a joyous and stress-free one. We believe that every gift should tell a story, evoke emotions, and bring people closer together. Whether you're celebrating a
     milestone or simply want to brighten someone's day, we're here to help you make it happen.
    </p>
    <p>
    Thank you for choosing [Your Gift Shop Name] as your trusted gift shop.
     We look forward to being a part of your special moments and helping you create lasting memories. 
     Explore our collection today and find the perfect gift that speaks from the heart.


    </p>
    <p>
    If you have any questions or need assistance, 
    please don't hesitate to reach out to our friendly customer support team. 
    Your satisfaction is our top priority.
    </p>
    <p>
    With warmest regards,

    </p>
    <p>
    [Your Name]
    </p>
    <p>Founder, [Your Gift Shop Name]</p>
    </div>
    </Container>
    
  );
};

export default page;
