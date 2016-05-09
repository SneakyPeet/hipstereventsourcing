import resolveHandler from './commandHandlerFactory';

export default function dispatch(command) {
  validateCommand(command);
  var handle = resolveHandler(command.type);
  handle(command);
}

function validateCommand(command) {
  if (!command.hasOwnProperty('type') || typeof command.type !== 'string' || command.type === '') {
    throw dipsatchException('Command Type Not Set', command);
  }

  if (!command.hasOwnProperty('payload') || typeof command.type === 'undefined') {
    throw dipsatchException('Command payload undefined', command);
  }
}

function dipsatchException(message, command) {
  return {
    name: 'Dipsatch Exception',
    message,
    command
  };
}
