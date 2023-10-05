import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import Data from "@/Header/option.json";
import { Form, Row, Col, Button } from "react-bootstrap";
import styles from "@/Header/HeaderDropdown/page.module.css";

function VariantsExample({ variants }) {
  return (
    <div className={styles.options}>
      <Button className={styles.btn}>ALL TYPES OF NEON</Button>
      <Link href="/">
        <Button className={styles.btn}>Home</Button>
      </Link>

      {Data.map((variant) => (
        <div key={variant.id}>
          <Dropdown>
            <Dropdown.Toggle
              id={`dropdown-${variant.id}`} // Use a unique identifier for the Toggle
              className={styles.btn}
            >
              {variant.menu}
            </Dropdown.Toggle>

            <Dropdown.Menu className={styles.dropdownList}>
              <>
                <Row>
                  {Object.entries(variant["sub-Menu"]).map(([keys, values]) => (
                    <Col key={keys} > {/* Use 'keys' as the key */}
                      <Dropdown.Item
                        href="#"
                        className={styles.dropdownListItemHeading}
                      >
                        {keys} 
                      </Dropdown.Item>
                    
                      <Row className={styles.itemList} >
                        {values.map((ele) => (
                          <Col key={ele}   > {/* Use 'ele' as the key */}
                            <Dropdown.Item
                              href="#"
                              className={styles.dropdownListItem}
                            >
                              {ele}
                            </Dropdown.Item>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  ))}
                </Row>
              </>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      ))}
    </div>
  );
}

export default VariantsExample;
