import { GoogleOAuthProvider } from "@react-oauth/google";
import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { io } from "socket.io-client";
import { baseUrl, isProduction, localhostUrl } from "./api/configuration";
export const googleClient = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const socket = io(`${isProduction ? baseUrl : localhostUrl}`);

socket.on("connection", (dataFromServer) => {
  console.log(`Received message from the server: ${dataFromServer}`);
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={googleClient}>
        <AppRoutes />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
};

export default App;
