import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import './CartIcon.scss';
import { toggleCartHidden } from '../redux/cartActions';

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
    <span className="item-count">0</span>
  </div>
);

export default connect(
  null,
  { toggleCartHidden }
)(CartIcon);
