const testSend = 'testSend';
const testRecv = 'testRecv';
const testCon = 'testConnect';

export const testReducer = (state = '', action) => {
  switch (action.type) {
    case testSend:
      return action.payload;
    case testRecv:
      return action.payload;
    case testCon:
      return state;
    default:
      return state;
  }
};
