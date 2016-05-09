export const CREATE_CART = 'CREATE_CART';
export function createCart(cartId, customerId) {
  return makeEvent(
    CREATE_CART, {
      cartId,
      customerId
    }
  );
}

export const ADD_ITEM = 'ADD_ITEM';
export function addItem(cartId, itemId) {
  return makeEvent(
    ADD_ITEM, {
      cartId,
      itemId
    }
  );
}

export const PAY = 'PAY';
export function pay(cartId) {
  return makeEvent(
    PAY, {
      cartId
    }
  );
}

function makeEvent(type, payload) {
  return {
    type,
    payload
  };
}
