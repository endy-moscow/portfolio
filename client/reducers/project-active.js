export default function (state=null, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload;
      break;
    default:
      return state;
  }
}
