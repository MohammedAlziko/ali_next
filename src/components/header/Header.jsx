import React from 'react'

import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faCartShopping, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';






const Header = () => {
  return (
    <>
           <header id="headerElement" className="flex">
        <Link href="/" className="logo">
       

<FontAwesomeIcon style={{
    width:"1.5rem",marginRight:".3rem"
}}  className="fa-solid fa-bag-shopping" icon={faBagShopping} />

          <span style={{ fontWeight: "bold" }}>AWU</span>
          <p style={{ letterSpacing: "0.5px" }}>Shopping</p>
        </Link>


        <nav className="links">
          <Link
            style={{ position: "relative" }}
            className="cart"
            href="/cart"
          >
        
            <FontAwesomeIcon style={{
    width:".8rem"
}}  className="fa-solid fa-cart-shopping" icon={faCartShopping} />


            $0.00
            <span className="products-number">2</span>
          </Link>


          <Link className="sign-in" href="/signin">
          <FontAwesomeIcon style={{
    width:".8rem"
}}  className="fa-solid fa-right-to-bracket" icon={faRightToBracket} />

            Sign in
          </Link>



          <Link className="register" href="/register">
            <i className="fa-solid fa-user-plus" />
            <FontAwesomeIcon style={{
    width:".8rem"
}}  className="fa-solid fa-user-plus" icon={faUserPlus} />

            Register
          </Link>
        </nav>

    
      </header>


    </>
  )
}

export default Header