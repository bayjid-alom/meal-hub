import React from 'react';
import './cart.css'

const Cart = ({ cart }) => {
    // console.log(cart);  // normally - []
    console.log(cart);  // Add to cart - [{…}]


    return (
        <div>




            {cart.length === 0 && (
                <div className="empty-cart">
                    <i className="fa-solid fa-cart-shopping empty-cart-icon"></i>
                    <h3>Your Cart is Empty</h3>
                    <p>Add some delicious meals!</p>
                </div>
            )}



       



            {cart.map(food => (
                <div
                    key={food.idMeal}
                    style={{
                        border: '1px solid gray',
                        borderRadius: '8px',
                        padding: '10px',
                        marginBottom: '10px',
                        backgroundColor: 'white'
                    }}>

                    <h3>{food.strMeal}</h3>
                    <p>{food.idMeal}</p>

                </div>
            ))}

        </div>
    );
};

export default Cart;