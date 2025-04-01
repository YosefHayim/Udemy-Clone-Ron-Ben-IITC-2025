// contexts/SocketProvider.tsx
import { createContext, useContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { baseUrl, isProduction, localhostUrl } from "../api/configuration";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const SocketContext = createContext(null);
export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const socketRef = useRef(null);
  const username = useSelector((state: RootState) => state.user.fullName);

  useEffect(() => {
    const socketInstance = io(`${isProduction ? baseUrl : localhostUrl}`);
    socketRef.current = socketInstance;

    socketInstance.connect();

    socketInstance.on("connect", () => {
      socketInstance.emit("userConnected", { username });
    });

    socketInstance.on("welcomeToServer", (data) => {
      console.log(data);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, [username]);

  return <SocketContext.Provider value={socketRef.current}>{children}</SocketContext.Provider>;
};
