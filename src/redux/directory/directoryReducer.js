const INITIAL_STATE = {
  sections: [
    {
      title: 'casual',
      imageUrl: 'https://i.ibb.co/gTM333D/casual.jpg',
      id: 1,
      linkUrl: 'shop/casual'
    },
    {
      title: 'smart',
      imageUrl: 'https://i.ibb.co/xH5Vjz9/Smart-Heels.jpg',
      id: 2,
      linkUrl: 'shop/smart'
    },
    {
      title: 'sports',
      imageUrl: 'https://i.ibb.co/BT5zVJW/sneakers.jpg',
      id: 3,
      linkUrl: 'shop/sports'
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/xqR0Rdw/womens-shoes.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/NtZ1CDH/mens-shoes.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
