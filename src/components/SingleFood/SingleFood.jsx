import React from 'react';
import FoodSection from '../FoodSection/FoodSection';
import './singleFood.css'

const SingleFood = ({ food, addToCart }) => {
    // console.log(food);   // []

    return (
        <div className='food-card'>
            <div className='image-div'>
                <img src={food.strMealThumb} alt="" />
            </div>


            <div className="card-center">
                <h3>{food.strMeal}</h3>
                <p className='category'>Category : <span>{food.
                    strCategory}</span></p>
            </div>


            <div className="card-footer">
                <button onClick={() => addToCart(food)} className='add-to-cart'> <i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
            </div>
        </div>
    );
};

export default SingleFood;