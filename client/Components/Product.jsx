/** 
 * @description presentational component for a product will receive props from the store 
 * 
 * @note might have to create a products_container component/ container 
 *
*/
  
import React from 'react';

// pre
const Product = props => {
  

  // display picture 
  // name 
  // product
  // price 
  // button to about page for each product

  return (
    <div className='product'>
      <p>Product ID: {props.id}</p>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <button type='button' className='buy_button' >Buy now for: {props.price}</button>
    </div>
  )
}

export default Product;