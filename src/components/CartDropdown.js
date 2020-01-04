import React from 'react';
import './CartDropdown.scss';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../redux/cart/cartSelectors';

import CustomButton from './FormComponents/CustomButton';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton inverted>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
