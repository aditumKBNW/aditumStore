/**
 * @description store container component that houses products
 * will need to be class component for the react router focus management 
 * 
 * 
 * @note state right now is in the client side, but eventually update this component to get state from the database
 */

 import React, { Component } from 'react';
 import Product from './Product.jsx';
 

 // the store component that will be displayed on route
 export default class Store extends Component {

  // fake state for now 
  constructor() {
    super()

    this.state = {
      products: [ {
        id: 1,
        name: 'Breakfast snaxx',
        description: 'Hungry? These snax will give you a mega boost, made out of bacon and eggs, leaves you with an aftertaste of maple syrup!',
        price: 5,
  
      }, 
      {
        id: 2,
        name: 'ring of truth',
        description: 'Will give you the answer to that question you really need the answer to, will disappear on one use.',
        price: 100,
      },
      {
        id: 3,
        name: 'Old Bike',
        description: 'Bike made to look old, it really works we swear!',
        price: 2,
      },
      {
        id: 4,
        name: 'Random item from our pocket',
        description: 'We will ship out whatever is in our pocket at the time of purchase, might be nothing, might be a quarter, could be an iphone, its all up to fate.',
        price: 10,
      },
      ],
      loading: true,
    } 
  }


  // lifecycle methods here will focus the updates
  
  
  render() {
    const { loading, products} = this.state;

    // create products array, and render the fake products
    if (loading) {
      const productsArr = [];

      for (let i = 0; i < products.length; i += 1) {
        const { id, name, description, price} = products[i];
        productsArr.push(
        <Product id={id} name={name} description={description} price={price} />
        );
      }

      return (
        <main>
          <h2 className='currentPageTitle'>AdiStore</h2>
          <div className='product_container'>
          { productsArr }
          </div>
        </main>
      
      )
    }

  }
 }