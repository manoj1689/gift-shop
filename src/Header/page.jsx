"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CallIcon from "@mui/icons-material/Call";
import VariantsExample from "./HeaderDropdown/page";
import DrawerComponent from "./LeftSideBar/page";
import { useCart } from "@/app/cartContext/page";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import productData from "@/app/products.json";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [showBadge, setShowBadge] = useState(false);
  const router = useRouter();
  const { state } = useCart();
  const [searchText, setSearchText] = useState("");
  const searchInputRef = useRef(null);

  useEffect(() => {
    console.log("Component mounted");

    if (state.cartItems.length > 0) {
      console.log("Cart has items");
      setShowBadge(true);
    } else {
      console.log("Cart is empty");
      setShowBadge(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.cartItems, setShowBadge]); // Include setShowBadge as a dependency

  // Define the 'items' variable here
  const items = productData
    .map((product) =>
      product.products.map((item) => ({
        id: item.ProductId,
        name: item.Name,
        image: item.Image?.original || "",
      }))
    )
    .flat();

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);

    // Handle item selection here, e.g., redirect to the selected product page.
    router.push(`/Categories/item/${item.id}`);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <div>
        <h7
          style={{
            display: "block",
            textAlign: "left",
            color: "black",
            fontSize: "16px",
          }}
        >
          {item.name}
        </h7>
      </div>
    );
  };

  return (
    <>
      <Container fluid className={styles.fullHeader}>
        <Row className={styles.topHeader}>
          <Col className={styles.topHeaderLeft}>
            <div className={styles.websiteLogo}>GiftShop</div>
            <div className={styles.searchBarDesktop}>
              <div className={styles.searchBar}>
                <ReactSearchAutocomplete
                  items={items}
                  onSearch={handleOnSearch}
                  onHover={handleOnHover}
                  onSelect={handleOnSelect}
                  onFocus={handleOnFocus}
                  autoFocus
                  formatResult={formatResult}
                  placeholder="Search Gift Here..."
                  resultClassName="searchResults"
                  resultItemClassName="searchResultsItem"
                  styling={{
                    height: "38px",
                    borderRadius: "0px",
                    backgroundColor: "#e7dede",
                    iconColor: "grey",
                    lineColor: "rgb(232, 234, 237)",
                    placeholderColor: "grey",
                    clearIconMargin: "3px 14px 0 0",
                    searchIconMargin: "0 0 0 16px",
                  }}
                />
              </div>
              <div className={styles.searchButtonBox}>
                <span className={styles.searchButton}>
                  <SearchIcon />
                </span>
              </div>
            </div>
          </Col>

          <Col className={styles.topHeaderRight}>
            <div className={styles.topIcons}>
              <div className={styles.topIconBox}>
                <div className={styles.BadgeContainer}>
                <div className={styles.Cart}>
                <div className={styles.BadgeValue}>
                    {showBadge && (
                      <Badge bg="warning" text="light" pill>
                        {state.cartItems.length}
                      </Badge>
                    )}
                  </div>
                  <div className={styles.BadgeIcon}>
                    <ShoppingCartIcon className={styles.Icon} />
                    </div>

                </div>
                  

                    <div className={styles.iconText}>
                  <Link href={"/cartProducts"}>Cart</Link>
                </div>
                
                   
                  
                </div>
                
               
              </div>
              <div className={styles.topIconBox}>
                <div>
                  <PersonIcon className={styles.Icon} />
                </div>
                <div className={styles.iconText}>
                  <Link href="/api/auth/signin">Sign In</Link>
                </div>
              </div>
              <div className={styles.topIconBox}>
                <div>
                  <PersonIcon className={styles.signUpIcon} />
                </div>
                <div className={styles.iconText}>
                  <Link href="/Pages/register">Sign Up</Link>
                </div>
              </div>
              <div>
                <div className={styles.contact}>
                  <CallIcon className={styles.callIcon} />
                  <div className={styles.contactDetails}>
                    +91xxx-xxx-xxxx|10AM To 7PM
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <VariantsExample />
        </Row>
        <div className={styles.mobileView}>
          <div className={styles.drawerMenu}>
            <DrawerComponent />
          </div>

          <div className={styles.searchBarMobileBox}>
            <div className={styles.searchBarMobile}>
              <ReactSearchAutocomplete
                items={items}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
                placeholder="Search Gift Here..."
                resultClassName="searchResults"
                resultItemClassName="searchResultsItem"
                styling={{
                  height: "38px",
                  width: "100%",
                  borderRadius: "0px",
                  backgroundColor: "white",
                  iconColor: "grey",
                  lineColor: "rgb(232, 234, 237)",
                  placeholderColor: "grey",
                  clearIconMargin: "3px 14px 0 0",
                  searchIconMargin: "0 0 0 16px",
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
