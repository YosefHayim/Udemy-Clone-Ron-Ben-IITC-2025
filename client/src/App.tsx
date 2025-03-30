import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SocketContext, socket } from "@/contexts/socket";
import { EmailProvider } from "@/contexts/EmailContext";
import { PersonalizeProvider } from "@/contexts/PersonalizeContext";
import AppRoutes from "@/routes/AppRoutes";
import { FilterProvider } from "./contexts/filterSearch";

export const googleClient = import.meta.env.VITE_GOOGLE_CLIENT_ID;

socket.on("connect", () => {
  console.log(`✅ Connected to server with ID: ${socket.id}`);
});

socket.on("WelcomeToServer", (data) => {
  console.log(data);
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <SocketContext.Provider value={socket}>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={googleClient}>
          <EmailProvider>
            <FilterProvider>
              <PersonalizeProvider>
                <AppRoutes />
              </PersonalizeProvider>
            </FilterProvider>
          </EmailProvider>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </SocketContext.Provider>
  );
};

export default App;
