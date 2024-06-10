import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js';  


const products = [
  { company: 'AGYM', productName: 'Spinning Cat Scratcher Ball', price: 52.99 },
  { company: 'Jasonwell', productName: 'Foldable Dog Pool', price: 27.25 },
  { company: 'Expawlorer', productName: 'Dog Fence Window', price: 30.50 },
  { company: 'Lollimeow', productName: 'Capsule Pet Travel Backpack', price: 59.00 },
  { company: 'Drool\'d', productName: 'Cat Hamster Wheel', price: 349.75 },
  { company: 'Lollimeow', productName: 'Sherpa Bubble Cat Carrier Backpack', price: 79.99 },
];

function OrderPage() {
  return (
    <>
      <h2>Order</h2>
      <p>Here is an order page of various pet toys. These pet toys are highly popular with your pet, and will become your pet's new favorite toy!</p>
      <article className="order">
        <p><strong>Please select only one product.</strong></p>
        <p><strong>* Fields are required</strong></p>
        <form action="/order" method="POST">
          <fieldset>
            <legend>Contact Information</legend>
            <label htmlFor="name" className="required">Name:</label>
            <input type="text" id="name" name="name" required autoFocus placeholder="Enter your name" /><br /><br />
            <label htmlFor="email" className="required">Email:</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email" /><br /><br />
            <label htmlFor="address" className="required">Address:</label>
            <textarea id="address" name="address" required placeholder="Enter your address"></textarea><br /><br />
          </fieldset>
          <fieldset>
            <legend>Products</legend>
            <p>Remember to only pick one product. Maximum number of product per purchase is 50.</p>
            <table>
              <caption>Available Products</caption>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Select</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <ProductRow key={index} product={product} />
                ))}
              </tbody>
            </table>
            <label htmlFor="quantity">Enter quantity between 1 and 50:</label>
            <input placeholder="#" type="number" name="quantity" id="quantity" max="50" min="1" required />
          </fieldset>
          <fieldset>
            <legend>Delivery Instructions</legend>
            <label htmlFor="instructions">Instructions:</label>
            <textarea id="instructions" name="instructions" placeholder="Enter delivery instructions (max 1200 characters)" maxLength="1200"></textarea><br /><br />
            <label htmlFor="submit">
              <button type="submit" id="submit" name="answers">Submit Order</button>
            </label>
          </fieldset>
        </form>
      </article>
      </>
  );
}

export default OrderPage;
