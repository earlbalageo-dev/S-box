import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import inventoryRoutes from './routes/inventoryRoutes.js';
import morgan from 'morgan';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3001'],
  },
});

//run socketIO when client connects
io.on('connection', (socket) => {
  console.log('new socket connection');
  socket.on('send-message', (message) => {
    io.emit('recieve-message', message);
    console.log(message);
  });
});

io.emit('');

dotenv.config();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//connect to DB
connectDB();

//mount routes
app.use('/', inventoryRoutes);

//middlewares
app.use(errorHandler);

//connect to server
const PORT = process.env.PORT || 3000;

//app.listen(PORT, console.log(`Server Running on Port: ${PORT}`));
server.listen(PORT, console.log(`Server Running on Port: ${PORT}`));
