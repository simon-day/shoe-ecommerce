import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import './CartIcon.scss';
import { toggleCartHidden } from '../redux/cart/cartActions';
import { selectCartItemsCount } from '../redux/cart/cartSelectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  { toggleCartHidden }
)(CartIcon);
