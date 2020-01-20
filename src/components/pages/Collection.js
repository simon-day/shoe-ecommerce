import React from 'react';
import { connect } from 'react-redux';
import './Collection.scss';
import CollectionItem from '../CollectionItem';
import { selectCollection } from '../../redux/shop/shopSelectors';
import {
  CollectionPageContainer,
  CollectionItemsContainer,
  CollectionTitle
} from './CollectionStyles';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
