"use client";
import React from "react";
import styles from "./page.module.css";
import { Container } from "react-bootstrap";
const page = () => {
  return (
    <Container>
      <div className={styles.policyBox}>
        <h1>Privacy Policy</h1>
        <p>Last Updated: [Date]</p>
        <p>
          Welcome to [Your Website Name] ("we," "our," or "us"). Your privacy is
          important to us, and we are committed to protecting your personal
          information. This Privacy Policy outlines how we collect, use,
          disclose, and safeguard your information when you visit our website or
          use our services. By accessing or using our website, you consent to
          the practices described in this Privacy Policy.
        </p>
        <h5>Table of Contents</h5>
        <ul className={styles.ulContent}>
          <li>Information We Collect</li>
          <li>How We Use Your Information</li>
          <li>Information Sharing</li>
          <li>Data Security</li>
          <li>Your Choices</li>
          <li>Children's Privacy</li>
          <li>Changes to this Privacy Policy</li>
          <li>Contact Us</li>
        </ul>
        <ul className={styles.liOutside}>
          <li>
            <h4>Information We Collect</h4>
            <br />
            <p>
              We may collect various types of information, including but not
              limited to:
            </p>
          </li>
          <ul className={styles.liInside}>
            <li>
              <h5 className={styles.h5}>Personal Information:</h5>
              <p className={styles.p}>
                This includes your name, email address, postal address, phone
                number, and other contact information when you provide it to us
                voluntarily.
              </p>
            </li>
            <li>
              <h5 className={styles.h5}>Usage Information:</h5>
              <p className={styles.p}>
                We collect data related to your interactions with our website,
                such as your IP address, browser type, operating system,
                referral URLs, and pages viewed. This information helps us
                analyze and improve our website's performance and user
                experience.
              </p>
            </li>
            <li>
              <h5 className={styles.h5}>Cookies and Tracking Technologies:</h5>
              <p className={styles.p}>
                We use cookies and similar technologies to collect data about
                your browsing behavior on our website. These technologies help
                us personalize your experience, remember your preferences, and
                analyze how you use our website.
              </p>
            </li>
          </ul>
          <br />
          <li>
            <h4>How We Use Your Information</h4>
            <br />
            <p>
              We use the information we collect for various purposes, including:
            </p>
          </li>
          <ul className={styles.liInside}>
            <li>
              <h5 className={styles.h5}>Providing Services: </h5>
              <p className={styles.p}>
                To fulfill your requests and provide the services you have
                requested, including processing orders, sending order
                confirmations, and responding to customer inquiries.
              </p>
            </li>
            <li>
              <h5 className={styles.h5}> Improving Our Services:</h5>
              <p className={styles.p}>
                To enhance our website, products, and services based on your
                feedback and usage patterns.
              </p>
            </li>
            <li>
              <h5 className={styles.h5}>Communication: </h5>
              <p className={styles.p}>
                To send you updates, newsletters, marketing materials, and
                promotional offers that may be of interest to you. You can
                opt-out of these communications at any time.
              </p>
            </li>
            <li>
              <h5 className={styles.h5}> Legal Compliance: </h5>
              <p className={styles.p}>
                To comply with applicable laws and regulations and to protect
                our rights and interests.
              </p>
            </li>
          </ul>
          <br />
          <li>
            <h4>Information Sharing</h4>
            <br />
            <p>
              We do not sell, rent, or trade your personal information to third
              parties. However, we may share your information with trusted
              third-party service providers who assist us in operating our
              website, conducting our business, or servicing you. These third
              parties are bound by confidentiality agreements and are prohibited
              from using your information for any other purpose.
            </p>
            <p>
              We may also share your information when required by law, in
              response to legal processes, to protect our rights, privacy,
              safety, or property, or to investigate fraud or security issues.
            </p>
          </li>
          <br />
          <li>
            <h4>Data Security</h4>
            <br />
            <p>
              We implement reasonable security measures to protect your personal
              information from unauthorized access, disclosure, alteration, or
              destruction. However, no data transmission over the internet or
              electronic storage is completely secure, and we cannot guarantee
              the absolute security of your information.
            </p>
          </li>
          <br />
          <li>
            <h4>Your Choices</h4>
            <br />
            <p>
              You have the right to access, correct, update, or delete your
              personal information. You can exercise these rights by contacting
              us at [contact email]. Please note that we may retain certain
              information as required by law or for legitimate business
              purposes.
            </p>
          </li>
          <br />
          <li>
            <h4>Children's Privacy</h4>
            <br />
            <p>
              Our website is not directed to individuals under the age of 13. We
              do not knowingly collect personal information from children under
              13 years of age. If you believe that a child has provided us with
              personal information without parental consent, please contact us,
              and we will take steps to remove such information.
            </p>
          </li>
          <br />
          <li>
            <h4> Changes to this Privacy Policy</h4>
            <br />
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will post the revised policy on our website
              with the "Last Updated" date at the top of the page. We encourage
              you to review this Privacy Policy periodically to stay informed
              about how we protect your information.
            </p>
          </li>
          <br />
          <li>
            <h4> Contact Us</h4>
            <br />
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at [contact email].
            </p>
            <p>
              By using our website, you consent to the terms outlined in this
              Privacy Policy.
            </p>
            <p>Thank you for trusting [Your Website Name].</p>
            <p>[Your Name]</p>
            <p>[Your Title]</p>
            <p>[Your Website Name]</p>
            <p>[Contact Email]</p>
            <p>[Contact Address]</p>
            <p>[Phone Number]</p>
          </li>
        </ul>
        <br />
      </div>
    </Container>
  );
};

export default page;
