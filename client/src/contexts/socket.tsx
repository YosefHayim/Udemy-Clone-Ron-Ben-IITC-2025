import { createContext, useContext } from "react";
import { io } from "socket.io-client";
import { baseUrl, isProduction, localhostUrl } from "../api/configuration";

export const socket = io(`${isProduction ? baseUrl : localhostUrl}`);
export const SocketContext = createContext(socket);
export const useSocket = () => useContext(SocketContext);
