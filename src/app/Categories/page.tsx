'use client'
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Products from "@/app/products.json";
import { useSession } from 'next-auth/react';
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const page = () => {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();
  if (!session) {
    // Redirect to the login page if the user is not authenticated
    // You can use the router to specify the redirect path
    return (
      <div>
        <p>Please log in to access this page.</p>
        <Link href="/api/auth/signin">SignIn</Link>
      </div>
    );
  }
  return (
    <main className={styles.main}>
      <div>
        <Container >
          <Row >
            {Products.map((categories) => (
              <>
                <Col >
                  <Card className={styles.card} >
                    <Card.Img
                      className={styles.cardImg}
                     
                      src={categories.image}
                    />

                    <Card.Title className={styles.catBox}>
                      <Link href={`/Categories/${categories.id}`}>
                        <div className={styles.catName}>
                          {categories.category}
                        </div>
                      </Link>
                    </Card.Title>
                  </Card>
                </Col>
              </>
            ))}
          </Row>
        </Container>
      </div>
    </main>
  );
};

export default page;
