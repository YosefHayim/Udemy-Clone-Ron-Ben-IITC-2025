import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SocketContext, socket } from "@/contexts/socket";
import { EmailProvider } from "@/contexts/EmailContext";
import { PersonalizeProvider } from "@/contexts/PersonalizeContext";
import AppRoutes from "@/routes/AppRoutes";
import { FilterProvider } from "./contexts/filterSearch";
import { RootState } from "./redux/store";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { initialOptions } from "./contexts/PaypalContext";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const googleClient = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const queryClient = new QueryClient();

const App = () => {
  const username = useSelector((state: RootState) => state.user.fullName);

  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      socket.emit("userConnected", { username });
    });

    socket.on("welcomeToServer", (data) => {
      console.log(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [username]);
  return (
    <SocketContext.Provider value={socket}>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={googleClient}>
          <EmailProvider>
            <FilterProvider>
              <PersonalizeProvider>
                <PayPalScriptProvider options={initialOptions}>
                  <AppRoutes />
                </PayPalScriptProvider>
              </PersonalizeProvider>
            </FilterProvider>
          </EmailProvider>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </SocketContext.Provider>
  );
};

export default App;
