export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, item) => {
  return cartItems.filter(cartItem => cartItem.id !== item.id);
};

export const removeItem = (cartItems, item) => {
  const itemToRemove = cartItems.find(cartItem => cartItem.id === item.id);

  if (itemToRemove.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== item.id);
  } else {
    return cartItems.map(cartItem =>
      cartItem.id === itemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
