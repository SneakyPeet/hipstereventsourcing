import {CREATE_CART, ADD_ITEM, PAY} from './commands';
import {handleCreateCart, handleAddItem, handlePay} from './cart/commandHandlers';

let handlers = {};
handlers[CREATE_CART] = handleCreateCart;
handlers[ADD_ITEM] = handleAddItem;
handlers[PAY] = handlePay;

export default function resolveHandler(commandType) {
  var handler = handlers[commandType];
  if (typeof handler === 'undefined' ) {
    throw 'Command Handler not registerd for ' + commandType;
  } else if (typeof handler !== 'function') {
    throw ['Command Handler for', commandType, 'not a function'].join(' ');
  }
  return handler;
}
