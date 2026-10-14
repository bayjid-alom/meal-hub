import React from 'react';
import navImage from "../../assets/food.jpg"
import "./navbar.css"

const Navbar = () => {
    return (
        <header className='header'>
            <nav className='nav-container'>

                <div className='nav-left'>

                    <img src={navImage} alt="Food image!" />
                    <p><span>Meal</span>Hub</p>
                </div>


                <div className='nav-center'>
                    <p>Home</p>
                    <p>Menu</p>
                    <p>About Us</p>
                    <p>Our Chefs</p>
                    <p>Contact</p>
                </div>


                <div className="nav-right">
                    <button>Order Now</button>
                </div>

            </nav>
        </header>
    );
};

export default Navbar;