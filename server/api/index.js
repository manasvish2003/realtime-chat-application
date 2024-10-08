const express = require("express")
const app = express()
const cors = require("cors")
const http = require('http').Server(app);
const PORT = process.env.PORT || 4000;
const socketIO = require('socket.io')(http, {
    cors: {
        origin: "*"
    }
});

app.use(cors())
let users = []

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`)

    socket.on("message", data => {
      socketIO.emit("messageResponse", data)
    })

    socket.on("typing", data => (
      socket.broadcast.emit("typingResponse", data)
    ))

    socket.on("newUser", data => {
      users.push(data)
      socketIO.emit("newUserResponse", users)
    })
 
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
      users = users.filter(user => user.socketID !== socket.id)
      socketIO.emit("newUserResponse", users)
      socket.disconnect()
    });
});

app.get("/api", (req, res) => {
  res.json({message: "Hello"})
});

module.exports = (req, res) => {
    const server = http.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

    res.socket.server.io = socketIO;
    socketIO.attach(res.socket.server);
    res.end();
};   

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});