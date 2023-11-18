import React from 'react';
import './Navbar.css'; // Import the CSS file
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
function Navbar() {

    return (
        <nav>
            <div className="nav-container">
                <label className="logo">ChorBazaar</label>

                <div className="search-container">
                    <form className="search-form" action="action_page.php">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit" className="search-button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                </div>
                <div className='btns'>
                    <div className='cart-btn' >
                        <Link to="/cart">
                            <button className="button button1">
                                <FontAwesomeIcon icon={faShoppingCart} className='cart-icon' />
                            </button>
                        </Link>
                    </div>
                    <div className='profile' >
                        <button className='button button1'>
                            <FontAwesomeIcon icon={faUser} className='user-icon'/>
                        </button>
                        <div className='profile-content'>
                            <p style={{fontSize:"20px"}}>Irfan Rza</p>
                            <button className='logout'>logout</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='btm-nav'>
                <input type="checkbox" id="check" className="check-input" />
                <ul className="nav-links">
                    <li className='menu-item'>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className='menu-item'>
                        <Link to="/clothing">
                            Clothing
                        </Link>
                    </li>
                    <li className='menu-item'>
                        <Link to="/electronics">
                            Electronics
                        </Link>
                    </li>
                    <li className='menu-item'>
                        <Link to="/groceries">
                            Jewelery
                        </Link>
                    </li>
                </ul>
                <label htmlFor="check" className="checkbtn">
                    <FontAwesomeIcon className='menu' icon={faBars} />
                </label>
            </div>
        </nav>
      );
    }
export default Navbar;
