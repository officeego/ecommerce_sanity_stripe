import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineWhatsApp } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">XYZ Electronics</Link>
      </p>
      <div className='whatsapp_icons'>
      <AiOutlineWhatsApp />
        <p>+237 671143610</p>
      </div>
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar