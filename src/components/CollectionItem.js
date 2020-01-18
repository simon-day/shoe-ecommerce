import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/cart/cartActions';
import './CollectionItem.scss';
import CustomButton from './FormComponents/CustomButton';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        className="custom-button"
        onClick={() => addItem(item)}
        inverted
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default connect(
  null,
  { addItem }
)(CollectionItem);
