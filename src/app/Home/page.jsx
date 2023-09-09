"use client";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import styles from "@/app/Home/page.module.css";
import React from "react";
import Link from "next/link";
import { Row, Col, Form, Button } from "react-bootstrap";
function page() {
  return (
    <>
      <Carousel indicators={false}>
        <Carousel.Item>
          <div className={styles.homeSlider}>
            <Image
              width={0}
              height={0}
              alt="Mountains"
              src="/couple.jpg"
              layout="responsive"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.homeSlider}>
            <Image
              width={0}
              height={0}
              alt="Mountains"
              src="/gifts.jpg"
              layout="responsive"
            />
          </div>
        </Carousel.Item>
      </Carousel>
      <Container className={styles.floatBox}>
        <Row className={styles.floatBoxContent}>
          <Row>
            <span className={styles.giftFinderText}>
              <>GIFT FINDER</>
            </span>
          </Row>
          <Row className={styles.selectGiftRow}>
            <Col>
              <span className={styles.gifFinderDropdownHeading}>Occasion</span>
              <Form.Select className={styles.Select1}>
                <option>Select Occasion</option>
                <option value="1"> Birthday Gifts</option>
                <option value="2">Anniversary Gifts</option>
                <option value="3">Housewarming Gifts</option>
                <option value="4"> Best Wishes Gifts</option>
                <option value="5">Baby Shower Gifts</option>
                <option value="6">Valentine Day Gifts</option>
                <option value="7">Wedding Gifts</option>
              </Form.Select>
            </Col>
            <Col>
              <span className={styles.gifFinderDropdownHeading}>Gift Type</span>
              <Form.Select className={styles.Select2}>
                <option>Gift Type</option>
                <option value="1">Name Gift</option>
                <option value="2">Photo Gift</option>
                <option value="3">Wooden Gift</option>
                <option value="4">Night Lamp</option>
                <option value="5">Wall Decor</option>
                <option value="6">Neon Sign</option>
                <option value="7">Photo Frames</option>
                <option value="8">Table Gift</option>
              </Form.Select>
            </Col>
            <Col className={styles.giftFinderBox} xs={4} md={2}>
              <Button variant="light" className={styles.giftFinderButton}>
                Find Gift
              </Button>
            </Col>
          </Row>
        </Row>
      </Container>
      
      <Row className={styles.HeadFixedBox}>
      <Row >
            <span className={styles.headFixedHeading}>
              <>GIFT FINDER</>
            </span>
          </Row>
        <Row className={styles.headFixedSelectRow}>
        <Col sm>
              <span className={styles.gifFinderDropdownHeading}>Occasion</span>
              <Form.Select className={styles.Select3}>
                <option>Select Occasion</option>
                <option value="1"> Birthday Gifts</option>
                <option value="2">Anniversary Gifts</option>
                <option value="3">Housewarming Gifts</option>
                <option value="4"> Best Wishes Gifts</option>
                <option value="5">Baby Shower Gifts</option>
                <option value="6">Valentine Day Gifts</option>
                <option value="7">Wedding Gifts</option>
              </Form.Select>
            </Col>
            <Col sm>
              <span className={styles.gifFinderDropdownHeading}>Gift Type</span>
              <Form.Select className={styles.Select4}>
                <option>Gift Type</option>
                <option value="1">Name Gift</option>
                <option value="2">Photo Gift</option>
                <option value="3">Wooden Gift</option>
                <option value="4">Night Lamp</option>
                <option value="5">Wall Decor</option>
                <option value="6">Neon Sign</option>
                <option value="7">Photo Frames</option>
                <option value="8">Table Gift</option>
              </Form.Select>
            </Col>
        </Row>
        <Row>
          <Button className={styles.headFixedButton}> Find Gift</Button>
        </Row>
      </Row>

     
      


    </>
  );
}

export default page;
