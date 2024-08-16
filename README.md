# realtime-chat-application

## Overview
This is a simple real-time chat application that allows users to communicate instantly through a web interface. It leverages modern web technologies to provide a seamless and interactive messaging experience.

## Features
- Real-Time Messaging: Messages are instantly delivered to all participants using WebSockets.
- User Management: Users can set a username, which is stored in the browser's local storage for easy access.
- Automatic Reconnection: The app automatically attempts to reconnect if the connection is lost.
- HTTP Fallback: If WebSockets are unavailable, the app falls back to HTTP long-polling to ensure continuous communication.
- Multi-User Support: Multiple users can join the chat room and interact simultaneously.
  
## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Real-Time Communication: Socket.IO
