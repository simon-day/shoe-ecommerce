import React from 'react';
import './CartDropdown.scss';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../redux/cart/cartSelectors';

import CustomButton from './FormComponents/CustomButton';

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => history.push('checkout')} inverted>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
