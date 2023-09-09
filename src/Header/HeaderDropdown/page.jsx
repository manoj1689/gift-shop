import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import Data from "@/Header/option.json";
import { Form, Row, Col, Button } from "react-bootstrap";
import styles from "@/Header/HeaderDropdown/page.module.css";

function VariantsExample() {
  return (
    <div className={styles.options}>
      <Button className={styles.btn}>ALL TYPES OF NEON</Button>
      <Link href="/">
        <Button className={styles.btn}>Home</Button>
      </Link>

      {Data.map((variant) => (
        <>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-autoclose-true"
              className={styles.btn}
            >
              {variant.menu}
            </Dropdown.Toggle>

            <Dropdown.Menu className={styles.dropdownList}>
              <>
                <Row>
                  {Object.entries(variant["sub-Menu"]).map(([keys, values]) => (
                    <>
                      <Col>
                        <Dropdown.Item
                          href="#"
                          className={styles.dropdownListItemHeading}
                        >
                          {keys}
                        </Dropdown.Item>

                        <Row className="">
                          {values.map((ele) => (
                            <>
                              <Row>
                                <Col>
                                  <Dropdown.Item
                                    href="#"
                                    className={styles.dropdownListItem}
                                  >
                                    {ele}
                                  </Dropdown.Item>
                                </Col>
                              </Row>
                            </>
                          ))}
                        </Row>
                      </Col>
                    </>
                  ))}
                </Row>
              </>
            </Dropdown.Menu>
          </Dropdown>
        </>
      ))}
    </div>
  );
}

export default VariantsExample;
