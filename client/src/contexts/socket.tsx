import { createContext, useContext } from "react";
import { io } from "socket.io-client";
import { baseUrl, isProduction, localhostUrl } from "../api/configuration";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const username = useSelector((state: RootState) => state.user.fullName);

export const socket = io(`${isProduction ? baseUrl : localhostUrl}`, {
  auth: {
    username: username,
  },
});
export const SocketContext = createContext(socket);
export const useSocket = () => useContext(SocketContext);
