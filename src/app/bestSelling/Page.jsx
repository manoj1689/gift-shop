import React from 'react'
import styles from "./page.module.css";
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import productsData from '../products.json';
import Link from 'next/link';
import { Card } from 'react-bootstrap';

const Page = ({ params }) => {

  const RecentItems = productsData.map((ele) => 
     (ele.products).find((item)=>item.Tag=="Best Selling")
  
   
  ).filter((item) => item !== undefined);;
  console.log(RecentItems)
  
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, 
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1424, // Adjust these breakpoints as needed
        settings: {
          slidesToShow: 4, // Number of slides to show at this breakpoint
        },
      }, 
      {
        breakpoint: 1279, // Adjust these breakpoints as needed
        settings: {
          slidesToShow: 3, // Number of slides to show at this breakpoint
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className={styles.bestSellingText}> BestSelling Gifts</div>
    <div className={styles.sliderWrapper} >
    <Slider {...settings}>
      {RecentItems && RecentItems.map((product)=>
      <>
      <div>
      <Link key={product.id} href={`/Categories/item/${product.ProductId}`}> 
           <Card className={styles.card}>
            <Card.Img variant="top" src={product.Image[0].original} />
            <Card.Body>
              <Card.Text>
                <p>
                {product.Name}
                </p>
              <div className={styles.priceDetails}>
                <div className={styles.offPrice}>
                ₹{product.OffPrice}
                </div>
                <div className={styles.originalPrice}>
                  <del>
                 {product.OriginalPrice}
                  </del>
                  
                </div>
                <div className={styles.discount}>
               {product.Discount}
                </div>
              </div>
              {/* <div className={styles.cashBackDiv}>
              <div className={styles.cashBackText}>
               
                cashBack of
                
                
              </div>
              <div className={styles.cashBackAmount}>
              {product.cashBack}
              </div>
              </div> */}
              </Card.Text>
            </Card.Body>
          </Card> 
         </Link>

      </div>
        
      
      </>)}
     
  </Slider>

    </div>
    
  
  </>
  )
}

export default Page