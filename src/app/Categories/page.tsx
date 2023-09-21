import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Products from "@/app/products.json";
import Image from "next/image";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const page = () => {
  return (
    <main className={styles.main}>
      <div>
        <Container >
          <Row>
            {Products.map((categories) => (
              <>
                <Col>
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
