import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './index';
import { useStateContext } from '../context/stateContext';

function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
        <p>
            <Link href="/" className="logo">
                JS Tech
            </Link>
        </p>
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {showCart && <Cart />}
    </div>
  )
}

export default Navbar