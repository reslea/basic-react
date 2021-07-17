export function counterReducer (prevState, { actionType }) {
  switch (actionType) {
    case 'increment':
      return prevState + 1;
    case 'decrement':
      return prevState - 1;
    default:
      return prevState;
  }
}