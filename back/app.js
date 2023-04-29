import express from 'express'
import http from 'http'
import cors from 'cors';
import { Server } from 'socket.io';
import { logIn, register, auth, sendmsg, getmsg, users} from './database.js';


const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET","POST"],
    },
}
);

app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

app.use(express.json());

io.on('connection', (socket) => {

  socket.on('message', (data) => {
    io.emit('msgUpdate', data);
  });

  socket.on('disconnect', () => {
  });
});

app.post('/api/users', async(req,res)=>{
  const { id } = req.body;
  const result = await users(id);
  res.status(200).json(result);
});

app.post('/api/auth', async(req,res)=>{
  const {authkey} = req.body;
  const result = await auth(authkey);
  res.status(200).json(result);
});

app.post('/api/login', async(req,res)=>{
  const { log } = req.body;
  const result = await logIn(log);
  res.status(200).json(result);
});

app.post('/api/register', async(req,res)=>{
  const { reg } = req.body;
  const result = await register(reg);
  res.status(200).json(result);
});

app.post('/api/sendmsg', async(req,res)=>{
  const { msg } = req.body;
  const result = await sendmsg(msg);
  res.status(200).json(result);
});

app.post('/api/getmsg', async(req,res)=>{
  const { id } = req.body;
  const result = await getmsg(id);
  res.status(200).json(result);
});


server.listen(5000,()=>{
  console.log("Server listening on port: 5000");
});