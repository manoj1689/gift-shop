/* eslint-disable react-hooks/rules-of-hooks */
"use client";
//This page show product details
import productsData from "../../../products.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from "@/app/cartContext/page";
import { useRouter } from 'next/navigation'; // Import the correct router module
import { useSession } from 'next-auth/react';
import Link from "next/link";
export default function Page({ params }) {
  const { data: session } = useSession();
  if (!session) {
    // Redirect to the login page if the user is not authenticated
    // You can use the router to specify the redirect path
    return (
      <div className={styles.loginAlertPage}>
      <Container className={styles.loginMessage}>
   <div className={styles.loginMessageText}>Please log in to access this page.</div>
   <Link href="/api/auth/signin" className={styles.loginLink}>
     SignIn
   </Link>
 </Container>
 </div>
    );
  }
  const router = useRouter();
  const [number, setNumber] = useState(1);
  const [openDiv, setOpenDiv] = useState({});
  const [showName, setShowName] = useState("");
  const [singleName, setSingleName] = useState("");
  const [coupleName, setCoupleName] = useState("");
  const [year, setYear] = useState("");
  const [date, setDate] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedAlphabet, setSelectedAlphabet] = useState("");
  const [uploadPhoto, setUploadPhoto] = useState([]);
  const [uploadCardPhoto, setUploadCardPhoto] = useState();
  const [uploadPhotosSpeaker, setUploadPhotosSpeaker] = useState();
  const [AddOns, setAddOns] = useState([]);
  const [Message, setMessage] = useState("");
  const [cardMessage, setCardMessage] = useState("");
  const [song, setSong] = useState("");
 // const [showModal, setShowModal] = useState(false);
  const [selectedSizeAmount, setSelectedSizeAmount] = useState("0");
  const [selectedColorAmount, setSelectedColorAmount] = useState("0");
  const [selectedAddOnsAmount, setSelectedAddOnsAmount] = useState(0);
 
  const [isFormComplete, setIsFormComplete] = useState(false);

  const [formData, setFormData] = useState({});
  const toggleDiv = (key) => {
    setOpenDiv((prevState) => ({
      ...prevState,
      [key]: !prevState[key], // Toggle the state for the specific entry
    }));
  };

  function increment() {
    setNumber(number + 1);
  }
  function decrement() {
    if (number > 1) {
      setNumber(number - 1);
    }
  }

  console.log(params);
  let selectedProduct = null;
  for (const category of productsData) {
    for (const product of category.products) {
      if (product.ProductId === params.id) {
        selectedProduct = product; // This will log the object with ProductName "product-3"
      }
    }
  }

  const resetForm = () => {
    setSelectedOccasion("");
    setSelectedSize("");
    setSelectedColor("");
    setSelectedAlphabet("");
    setUploadPhoto([]);
    setUploadCardPhoto(null); // Set to null for file input fields
    setUploadPhotosSpeaker(null); // Set to null for file input fields
    setAddOns([]);
    setShowName("");
    setSingleName("");
    setCoupleName("");
    setDate("");
    setYear("");
    setMessage("");
    setCardMessage("");
    setSong("");
    setNumber(1);
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    router.push('/cartCheckout');
    addToCart();
    const formData = new FormData();

    // Append form fields to the FormData object
    formData.append("selectedOccasion", selectedOccasion);
    formData.append("selectedSize", selectedSize);
    formData.append("selectedColor", selectedColor);
    formData.append("selectedAlphabet", selectedAlphabet);
    formData.append("showName", showName);
    formData.append("singleName", singleName);
    formData.append("coupleName", coupleName);
    formData.append("year", year);
    formData.append("date", date);
    formData.append("message", Message);
    formData.append("cardMessage", cardMessage);
    formData.append("song", song);
    formData.append("quantity", number);
  
    if (uploadPhoto) {
      uploadPhoto.forEach((file, index) => {
        formData.append(`uploadPhoto_${index}`, file);
      });
    }
   
   
    
    // Append more uploaded files as needed
    if (uploadCardPhoto) {
      uploadCardPhoto.forEach((file, index) => {
        formData.append(`uploadCardPhoto_${index}`, file);
      });
    }

    if (uploadPhotosSpeaker) {
      uploadPhotosSpeaker.forEach((file, index) => {
        formData.append(`uploadPhotosSpeaker_${index}`, file);
      });
    }

    // Append AddOns data (you might need to adjust this part based on your data structure)
    AddOns.forEach((addOn, index) => {
      formData.append(`AddOns_${index}`, addOn);
    });

    // Make the POST request with the FormData object
    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData,
       
      });
     

      if (response.ok) {
        const responseData = await response.json();
        console.log("Form data saved successfully!", responseData);

        resetForm(); 
        
      } else {
        console.error("Failed to save form data.");
      }
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };
  const handleCheckboxChange = (event, id) => {
    // Get the ID of the checkbox from the 'id' attribute
    const checkboxId = id;

    // Create a copy of the current AddOns array
    const updatedAddOns = [...AddOns];

    if (event.target.checked) {
      // If the checkbox is checked, add the AddOn to the array
      updatedAddOns.push(selectedProduct.AddOns[id][0]);

      // Calculate the price of the added AddOn and update the total
      const addOnPrice = parseFloat(selectedProduct.AddOns[id][1]);
      setSelectedAddOnsAmount((prevAmount) => prevAmount + addOnPrice);
    } else {
      // If the checkbox is unchecked, remove the AddOn from the array
      const index = updatedAddOns.indexOf(selectedProduct.AddOns[id][0]);
      if (index !== -1) {
        updatedAddOns.splice(index, 1);

        // Calculate the price of the removed AddOn and update the total
        const addOnPrice = parseFloat(selectedProduct.AddOns[id][1]);
        setSelectedAddOnsAmount((prevAmount) => prevAmount - addOnPrice);
      }
    }

    // Update the state with the updated AddOns array
    setAddOns(updatedAddOns);
    const totalAddOnsPrice = updatedAddOns.reduce((total, addOn) => {
      return total + parseFloat(addOn[1]); // Assuming the price is in index 1 of the AddOn array
    }, 0);
    const newOffPrice = (
      parseFloat(selectedProduct.OriginalOffPrice) + totalAddOnsPrice
    ).toFixed(2);
     
    setFormData({
      ...formData,
    
    });
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    switch (name) {
      case "selectedSize":
        setSelectedSize(value);

        // Find the selected size info
        const sizeInfo = selectedProduct.selectSize.find(
          (sizeObj) => sizeObj.size === value
        );

        if (sizeInfo) {
          // Update the selected size's amount
          setSelectedSizeAmount(sizeInfo.amount);
        } else {
          // Handle the case where the selected size is not found
          setSelectedSizeAmount("0");
        }
        break;
      case "selectedOccasion":
        setSelectedOccasion(value);
        break;

      case "selectedColor":
        setSelectedColor(value);

        // Find the selected color info
        const colorInfo = selectedProduct.selectColor.find(
          (colorObj) => colorObj.text === value
        );

        if (colorInfo) {
          // Update the selected color's amount
          setSelectedColorAmount(colorInfo.amount);
        } else {
          // Handle the case where the selected color is not found
          setSelectedColorAmount("0");
        }
        break;
      case "selectedAlphabet":
        setSelectedAlphabet(value);
        break;
      case "uploadPhoto":
        setUploadPhoto([...files]);
        break;
      case "showName":
        setShowName(value);
        break;
      case "singleName":
        setSingleName(value);
        break;
      case "coupleName":
        setCoupleName(value);
        break;
      case "date":
        setDate(value);
        break;
      case "year":
        setYear(value);
        break;
      case "message":
        setMessage(value);
        break;
      case "uploadCardPhoto":
        setUploadCardPhoto([...files]);
        break;
      case "uploadPhotosSpeaker":
        setUploadPhotosSpeaker([...files]);
        break;
      case "cardMessage":
        setCardMessage(value);
        break;
      case "song":
        setSong(value);
        break;

      default:
        break;
    }
    const requiredFields = [
      selectedColor,
      selectedSize,
      cardMessage,
      showName,
      singleName,
      coupleName,
      Message,
    ];

    const isComplete = requiredFields.some((field) => !!field);

    // Update the state variable based on whether the form is complete
    setIsFormComplete(isComplete);

    setFormData({
      ...formData,

      AddOns: AddOns,
      [name]: value,
    });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      number// Update the number field in formData
      
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  console.log(formData)
  //console.log(AddOns)
  // add to cart
  const getCartFromLocalStorage = () => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  };

  // Function to save cart data to localStorage
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const { state, dispatch } = useCart(); // Use the Cart Context

  // Initialize the cart state with data from localStorage
  useEffect(() => {
    const cartData = getCartFromLocalStorage();
    dispatch({ type: "INITIALIZE_CART", payload: cartData });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle adding the selected product to the cart
  const addToCart = () => {
    const totalAmount =
      parseFloat(selectedProduct.OffPrice) +
      parseFloat(selectedSizeAmount) +
      parseFloat(selectedColorAmount) +
      parseFloat(selectedAddOnsAmount);
  
    const cartItem = {
      productId: selectedProduct.ProductId,
      name: selectedProduct.Name,
      price: totalAmount.toFixed(2),
      // Add other product details as needed
      quantity: number,
      // Add other form data like selectedOccasion, selectedSize, etc.
    };

    // Dispatch an action to add the item to the cart
    dispatch({ type: "ADD_TO_CART", payload: cartItem });

    // Get the latest cart data from state
    const updatedCartData = state.cartItems;

    // Save the updated cart data to localStorage
    saveCartToLocalStorage(updatedCartData);
    //setShowModal(true);
    resetForm();
  };

  // ... rest of your component code

  return (
    <div>
      <Container className={styles.itemContainer} fluid>
        <Row>
          <Col sm={6}>
            {selectedProduct.Image.length > 1 ? (
              <Container>
                <Gallery
                  thumbnailPosition="left"
                  items={selectedProduct.Image}
                />
              </Container>
            ) : (
              <Container>
                <p>No Image Available</p>
              </Container>
            )}
          </Col>
          <Col sm={6}>
         
            <h1 className={styles.itemName}>{selectedProduct.Name}</h1>

            <div className={styles.priceDetails}>
              <div className={styles.offPrice}>
                ₹
                {(
                  parseFloat(selectedProduct.OffPrice) +
                  parseFloat(selectedSizeAmount) +
                  parseFloat(selectedColorAmount) +
                  parseFloat(selectedAddOnsAmount)
                ).toFixed(2)}
              </div>

              <div className={styles.originalPrice}>
                <del>{selectedProduct.OriginalPrice}</del>
              </div>
              <div className={styles.discount}>{selectedProduct.Discount}</div>
            </div>
                  <div>
                  <Form onSubmit={handleFormSubmit}>
                  
           
             
                {" "}
                <div className={styles.inputDetails}>
                  <div>
                    {selectedProduct.showName ? (
                      <>
                        <br />
                        <div className={styles.entryBox}>
                          <Form.Control
                            className={styles.details}
                            type="text"
                            name="showName"
                            value={showName}
                            onChange={handleInputChange}
                            placeholder={selectedProduct.showName}
                            required
                          />
                        </div>
                      </>
                    ) : null}
                  </div>
                  <div>
                    {selectedProduct.singleName ? (
                      <>
                        <br />
                        <div className={styles.entryBox}>
                          <Form.Control
                            className={styles.details}
                            type="text"
                            name="singleName"
                            value={singleName}
                            onChange={handleInputChange}
                            placeholder={selectedProduct.singleName}
                            required
                          />
                        </div>
                      </>
                    ) : null}
                  </div>
                  <div>
                    {selectedProduct.coupleName ? (
                      <>
                        <br />
                        <div className={styles.entryBox}>
                          <Form.Control
                            className={styles.details}
                            type="text"
                            name="coupleName"
                            value={coupleName}
                            onChange={handleInputChange}
                            placeholder={selectedProduct.coupleName}
                            required
                          />
                        </div>
                      </>
                    ) : null}
                  </div>
                  <div>
                    {selectedProduct.date ? (
                      <>
                        <br />
                        <div className={styles.entryBox}>
                          <Form.Control
                            className={styles.details}
                            type="text"
                            name="date"
                            value={date}
                            onChange={handleInputChange}
                            placeholder={selectedProduct.date}
                            required
                          />
                        </div>
                      </>
                    ) : null}
                  </div>
                  <div>
                    {selectedProduct.year ? (
                      <>
                        <br />
                        <div className={styles.entryBox}>
                          <Form.Control
                            className={styles.details}
                            type="text"
                            name="year"
                            value={year}
                            onChange={handleInputChange}
                            placeholder={selectedProduct.year}
                            required
                          />
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
                <div className={styles.select}>
                  {selectedProduct.selectOccasions &&
                  selectedProduct.selectOccasions.length >= 1 ? (
                    <>
                      <span className={styles.selectHeading}>
                        Choose Occasions
                      </span>
                      <span className={styles.required}>*</span>
                      <Form.Select
                        className={styles.dropDown}
                        name="selectedOccasion"
                        value={selectedOccasion}
                        onChange={handleInputChange}
                      >
                        {selectedProduct.selectOccasions.map((ele, id) => (
                          <>
                            <option key={id} value={ele}>
                              {ele}
                            </option>
                          </>
                        ))}
                      </Form.Select>
                    </>
                  ) : null}
                </div>
                <div className={styles.select}>
                  {selectedProduct.selectSize &&
                  selectedProduct.selectSize.length >= 1 ? (
                    <>
                      <span className={styles.selectHeading}>Choose Size</span>
                      <span className={styles.required}>*</span>
                      <Form.Select
                        className={styles.dropDown}
                        name="selectedSize"
                        value={selectedSize}
                        onChange={handleInputChange}
                      >
                        {selectedProduct.selectSize.map((sizeObj, id) => (
                          <option key={id} value={sizeObj.size}>
                            {sizeObj.size}
                          </option>
                        ))}
                      </Form.Select>
                    </>
                  ) : null}
                </div>
                <div className={styles.select}>
                  {selectedProduct.selectColor &&
                  selectedProduct.selectColor.length >= 1 ? (
                    <>
                      <span className={styles.selectHeading}>Choose Color</span>
                      <span className={styles.required}>*</span>
                      <Form.Select
                        className={styles.dropDown}
                        name="selectedColor"
                        value={selectedColor}
                        onChange={handleInputChange}
                      >
                        {selectedProduct.selectColor.map((color, id) => (
                          <option key={id} value={color.text}>
                            {color.text}
                          </option>
                        ))}
                      </Form.Select>
                    </>
                  ) : null}
                </div>
                <div className={styles.select}>
                  {selectedProduct.selectAlphabet &&
                  selectedProduct.selectAlphabet.length >= 1 ? (
                    <>
                      <span className={styles.selectHeading}>
                        Choose Alphabet
                      </span>
                      <span className={styles.required}>*</span>
                      <Form.Select
                        className={styles.dropDown}
                        name="selectedAlphabet"
                        value={selectedAlphabet}
                        onChange={handleInputChange}
                      >
                        {selectedProduct.selectAlphabet.map((ele, id) => (
                          <>
                            <option key={id} value={ele}>
                              {ele}
                            </option>
                          </>
                        ))}
                      </Form.Select>
                    </>
                  ) : null}
                </div>
                <div className={styles.select}>
                  {selectedProduct.uploadPhoto ? (
                    <>
                      <div className={styles.selectHeading}>
                        {selectedProduct.uploadPhoto}
                      </div>
                      <input
                        type="file"
                        multiple
                        name="uploadPhoto"
                        onChange={handleInputChange}
                        accept="image/*"
                        required
                      />
                    </>
                  ) : null}
                </div>
                <div>
                  {selectedProduct.Message ? (
                    <>
                      <br />
                      <div className={styles.entryBox}>
                        <Form.Control
                          className={styles.details}
                          type="text"
                          name="message"
                          value={Message}
                          onChange={handleInputChange}
                          placeholder={selectedProduct.Message}
                          required
                        />
                      </div>
                    </>
                  ) : null}
                </div>
                <div className={styles.select}>
                  <div className={styles.addOnsHeading}>Add Ons</div>
                  {selectedProduct.AddOns
                    ? Object.keys(selectedProduct.AddOns).map((id) => (
                        <>
                          <div key={id} className={styles.addOns}>
                            <div>
                              {" "}
                              <Form.Check
                                type="checkbox"
                                id={id}
                                onChange={(event) =>
                                  handleCheckboxChange(event, id)
                                } // Pass the ID to the handler
                              />
                            </div>
                            <div className={styles.addOnsText}>
                              {" "}
                              {selectedProduct.AddOns[id][0]}
                            </div>
                          </div>
                        </>
                      ))
                    : null}
                </div>
                <div className={styles.select}>
                  {selectedProduct.uploadCardPhoto ? (
                    <>
                      <div className={styles.selectHeading}>
                        {selectedProduct.uploadCardPhoto}
                      </div>
                      <input
                        type="file"
                        multiple
                        name="uploadCardPhoto"
                        onChange={handleInputChange}
                        accept="image/*"
                        required
                      />
                    </>
                  ) : null}
                </div>
                <div>
                  {selectedProduct.cardMessage ? (
                    <>
                      <br />
                      <div className={styles.entryBox}>
                        <Form.Control
                          className={styles.details}
                          type="text"
                          name="cardMessage"
                          value={cardMessage}
                          onChange={handleInputChange}
                          placeholder={selectedProduct.cardMessage}
                          required
                        />
                      </div>
                    </>
                  ) : null}
                </div>
                <div className={styles.select}>
                  {selectedProduct.uploadPhotosSpeaker ? (
                    <>
                      <div className={styles.selectHeading}>
                        {selectedProduct.uploadPhotosSpeaker}
                      </div>
                      <input
                        type="file"
                        multiple
                        name="uploadPhotosSpeaker"
                        onChange={handleInputChange}
                        accept="image/*"
                      />
                    </>
                  ) : null}
                </div>
                <div>
                  {selectedProduct.Song ? (
                    <>
                      <br />
                      <div className={styles.entryBox}>
                        <Form.Control
                          className={styles.details}
                          type="text"
                          name="message"
                          value={song}
                          onChange={handleInputChange}
                          placeholder={selectedProduct.Song}
                          required
                        />
                      </div>
                    </>
                  ) : null}
                </div>
                <div className={styles.numberItemsBox}>
                  <span>Qty</span>
                  <span>
                    <Button
                      className={styles.Button}
                      variant="danger"
                      onClick={decrement}
                    >
                      -
                    </Button>
                  </span>
                  <span className={styles.number}>{number}</span>
                  <span>
                    <Button
                      className={styles.Button}
                      variant="danger"
                      onClick={increment}
                    >
                      +
                    </Button>
                  </span>
                </div>
                <Row>
                  <Col md={6}>
                    <Button
                      variant="danger"
                      onClick={addToCart}
                      className={styles.addCart}
                      disabled={!isFormComplete} // Disable the button if the form is not complete
                    >
                      <span>
                        <AddShoppingCartIcon />
                      </span>
                      <span> ADD TO CART </span>
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button
                      type="submit"
                  
                      variant="danger"
                      className={styles.buyButton}
                    >
                      <span> <ShoppingCartIcon/> </span>
                      <span> BUY NOW</span>
                    </Button>
                  </Col>
                </Row>
              </Form>
              </div>
            {/* Modal for showing the pop-up message */}
            {/* <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Item Added</Modal.Title>
              </Modal.Header>
              <Modal.Body>The item has been added to the cart.</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal> */}

            <div>
              <div className={styles.selectHeading}>Description</div>
              <div className={styles.container}>
                <div>
                  {Object.entries(selectedProduct["Description:"]).map(
                    ([key, value]) => (
                      <div key={key} className={styles.box}>
                        <Button
                          variant="danger"
                          onClick={() => toggleDiv(key)}
                          className={styles.descriptionButton}
                        >
                          <div className={styles.buttonContent}>
                            {" "}
                            <div>{key}</div>
                            <div>
                              <ExpandMoreIcon />
                            </div>
                          </div>
                        </Button>
                        {openDiv[key] ? (
                          <div className={styles.content}>
                            {value.map((ele, index) => (
                              <p className={styles.descriptionText} key={index}>
                                {ele}
                              </p>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
