'use client'
//This page show chosen category cards
import React, { useState } from 'react';
import productsData from '../../products.json';
import Link from 'next/link';
import {Card,Container,Row,Col} from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import styles from "./page.module.css";

const ProductsPage = ({ params }) => {
  
  // Define the number of items to display per page
  const itemsPerPage = 5;

  // Initialize state variables for the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Find the selected category
  const category = productsData.find((item) => item.id === params.id);

  // Ensure the category exists
  if (!category) {
    return <div>Category not found</div>;
  }

  // Paginate the products based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const paginatedProducts = category.products.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(category.products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
       <h1>{category.category}</h1>
      <Container className={styles.categoryContainer}>
        <Row >
        {paginatedProducts.map((product) => (
          <>
          <Col className={styles.containerCol} >
          <Link key={product.id} href={`/Categories/item/${product.ProductId}`}>
          <Card className={styles.card}>
            <Card.Img variant="top" src="/images/productImg/CardImage.avif" />
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
              <div className={styles.cashBackDiv}>
              <div className={styles.cashBackText}>
               
                cashBack of
                
                
              </div>
              <div className={styles.cashBackAmount}>
              {product.cashBack}
              </div>
              </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
          </Col>
          
          </>
        
      ))}

        </Row>
      

      </Container>
     
      

      {/* Pagination */}
      <div className={styles.paginationContainer}>
      <Pagination className={styles.paginationBar}>
      <Pagination.First
    onClick={() => handlePageChange(1)} // Handle first page click
    disabled={currentPage === 1} // Disable if already on the first page
  />
      <Pagination.Prev
    onClick={() => handlePageChange(currentPage - 1)} // Handle previous page click
    disabled={currentPage === 1} // Disable if on the first page
  />
  <Pagination.Ellipsis />
        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Ellipsis />
        <Pagination.Next
    onClick={() => handlePageChange(currentPage + 1)} // Handle next page click
    disabled={currentPage === pageNumbers.length} // Disable if on the last page
  />
    <Pagination.Last
    onClick={() => handlePageChange(pageNumbers.length)} // Handle last page click
    disabled={currentPage === pageNumbers.length} // Disable if already on the last page
  />
      </Pagination>

      </div>
     
    </div>
  );
};

export default ProductsPage;
