"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CallIcon from "@mui/icons-material/Call";
import VariantsExample from "./HeaderDropdown/page"
import DrawerComponent from "./LeftSideBar/page"
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <>
      <div className={styles.fullHeader}>
     
        <Row className={styles.topHeader}>
          <Col className={styles.topHeaderLeft}>
            <div className={styles.websiteLogo}>GiftShop</div>
            <div className={styles.searchBox} >
              <form action="" method="get">
              <input className={styles.searchInput} type="text" autocomplete="on" placeholder="Search Gifts Here..." />
            <button className={styles.searchButton}><SearchIcon /></button>

              </form>
            
            </div>
          </Col>

          <Col className={styles.topHeaderRight}>
            <div className={styles.topIcons}>
              <span className={styles.topIconBox}>
                <span>
                  <Badge
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    badgeContent={4}
                    color="warning"
                  >
                    <ShoppingCartIcon className={styles.Icon} />
                  </Badge>
                </span>
                <span className={styles.iconText}>Cart</span>
              </span>
              <span className={styles.topIconBox}>
                <span>
                  <PersonIcon className={styles.Icon}  />
                </span>
                <span className={styles.iconText}>
                  <Link href="/api/auth/signin" >Sign In</Link></span>
              </span>
              <span className={styles.topIconBox}>
                <span>
                  <PersonIcon className={styles.signUpIcon}  />
                </span>
                <span className={styles.iconText}>
                  <Link href="/Pages/register">Sign Up</Link></span>
              </span>
              <span>
                <span className={styles.contact}>
                  <CallIcon className={styles.callIcon} />

                  <span className={styles.contactDetails}>+91xxx-xxx-xxxx|10AM To 7PM</span>
                </span>
              </span>
            </div>
          </Col>
        </Row>

       <Row>
        <VariantsExample/>
      
     
       </Row>
       <div className={styles.mobileView}>
        <div className={styles.drawerMenu}>
        <DrawerComponent/>  
        </div>
       <div className={styles.mobileViewSearch}>
         <form action="" method="get">
              <input  className={styles.mobileViewSearchInput} type="text" autocomplete="on"  placeholder="Search Gifts Here..." />

              </form>    

       </div>
              
       </div>
      </div>
      
    </>
  );
};

export default Header;
