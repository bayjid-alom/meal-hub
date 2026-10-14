import React, { use } from 'react';
import SingleFood from '../SingleFood/SingleFood';
import './foodSection.css'



const FoodSection = ({ foodDataRes }) => {
    // foodDataRes   // return promise
    const data = use(foodDataRes)  // return object
    const foods = data.meals;  // retun array
    // console.log(foods);

    return (

        <section className='foods-section'>


            {/* leftside */}
            <div style={{ width: '75%' }} className='foods-container'>
                {
                    foods.map(food => <SingleFood food={food}></SingleFood>)
                }
            </div>


            {/* right side */}
            <div className="cart-container" style={{ backgroundColor: 'bisque', width: '25%' }}>
                <h2>Cart</h2>
            </div>

        </section>
    );
};

export default FoodSection;