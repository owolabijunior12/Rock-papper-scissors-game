const dotenv = require("dotenv");
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const roomHandler = require("./roomHandler");

dotenv.config();
const app = express();

app.get("/", (req, res)=>{
    return res.json("hello iboytech to the world");
})
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin:  "https://iboytech-game-rps.vercel.app"},
});

const rooms = [];

io.on("connection", (socket) => {
  console.log("connected", socket.id);
  roomHandler(io, socket, rooms);

  socket.on("disconnect", () => {
    console.log("disconnected", socket.id);
  });
});

const port = process.env.PORT || 8080;
httpServer.listen(port, () => console.log(`Listening on port 8080`));
