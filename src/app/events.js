export const CART_CREATED = 'CART_CREATED';
export function cartCreated(cartId, customerId) {
  return makeEvent(
    CART_CREATED, {
      cartId,
      customerId
    }
  );
}

export const ITEM_ADDED = 'ITEM_ADDED';
export function itemAdded(cartId, itemId) {
  return makeEvent(
    ITEM_ADDED, {
      cartId,
      itemId
    }
  );
}

export const CART_PAID = 'CART_PAID';
export function cartPaid(cartId) {
  return makeEvent(
    CART_PAID, {
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
