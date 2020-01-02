import React from 'react';
import './CartDropdown.scss';
import CustomButton from './FormComponents/CustomButton';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
