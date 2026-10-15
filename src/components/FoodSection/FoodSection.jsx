import React, { use, useState } from 'react';
import SingleFood from '../SingleFood/SingleFood';
import './foodSection.css'
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';





const FoodSection = ({ foodDataRes }) => {
    // foodDataRes   // return promise
    const data = use(foodDataRes)  // return object
    const foods = data.meals;  // return array
    // console.log(foods);

    const [cart, setCart] = useState([])
    const addToCart = (foodData) => {
        // cart.push(foodData)   // Not work
        setCart([...cart, foodData])
    }

    const handleOrder = () => {
        setCart([])
        // alert("Order completed.")
        // toast("Order completed!");  // simple

        toast.success("Order completed!");
        // toast.error("Something went wrong!");
        // toast.warning("Please check your order!");
        // toast.info("Your order is being processed!");
    }


    return (

        <section className='foods-section'>


            {/* leftside */}
            <div style={{ width: '75%' }} className='foods-container'>
                {
                    foods.map(food => <SingleFood key={food.idMeal} addToCart={addToCart} food={food}></SingleFood>)
                }
            </div>


            {/* right side */}
            <div className="cart-container" style={{ width: '25%' }}>
                <h2>Cart</h2>


                <Cart cart={cart}></Cart>

                <button onClick={handleOrder} className='order-btn'>Order</button>
                <ToastContainer />

            </div>

        </section>
    );
};

export default FoodSection;