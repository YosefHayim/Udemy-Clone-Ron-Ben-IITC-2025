import { Server } from "socket.io";
import { createServer } from "node:http";
import app, { allowedOrigins } from "./app.ts";

export const server = createServer(app);

export const launchSocket = () => {
  // Creating new namespace of the io
  const io = new Server(server, {
    cors: {
      origin: allowedOrigins,
      credentials: true,
    },
  });

  // launching the main connection of the io and send message to every client that logs
  io.on("connection", (socket) => {
    if (socket.connected) {
      socket.emit(
        "welcomeToServer",
        "Welcome to the Udemy clone socket server"
      );
    }

    // listen to client to know which user has logged in
    socket.on("userConnected", ({ username }) => {
      console.log("User connected:", username);
    });
  });
};
