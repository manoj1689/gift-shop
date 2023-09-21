'use client'
//This page show product details
import productsData from '../../../products.json';
import Link from 'next/link';
 
export default function Page({params}) {
 console.log(params)
 let selectedProduct = null; 
  for (const category of productsData) {
    for (const product of category.products) {
      if (product.ProductId === params.id) {
     //console.log(product) 
     selectedProduct = product;// This will log the object with ProductName "product-3"
      }
    }
  }

  return (
    <div>
      <h1>{selectedProduct.Name}</h1>
      
      <h4>{selectedProduct.OriginalPrice}</h4>
      <h5>{selectedProduct.Discount}</h5>
      
    </div>
  );
}
