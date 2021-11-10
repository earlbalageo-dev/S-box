import { io } from 'socket.io-client';

const testSend = 'testSend';
const testRecv = 'testRecv';
const testCon = 'testConnect';

const socket = io('http://localhost:3000/');

socket.on('recieve-message', (message) => {
  console.log(`RECIEVING: ${message}`);
});

export const testConnect = () => async (dispatch) => {
  console.log('Dispatching test connect');

  socket.on('connect', () => {
    console.log('TEST CONNECTION 123');
  });

  dispatch({ type: testCon });
};

export const testSendMsg = (msg) => async (dispatch) => {
  console.log('TEST SEND MSG ACTION');
  socket.emit('send-message', msg);

  dispatch({ type: testSend, payload: msg });
};

export const testRecvMsg = (msg) => async (dispatch) => {
  console.log('TEST RECV MSG ACTION');

  socket.on('recieve-message', (message) => {
    console.log(message);
  });
  dispatch({ type: testRecv, payload: msg });
};
