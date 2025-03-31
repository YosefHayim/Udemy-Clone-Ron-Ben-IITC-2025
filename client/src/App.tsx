import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SocketContext, socket } from "@/contexts/socket";
import { EmailProvider } from "@/contexts/EmailContext";
import { PersonalizeProvider } from "@/contexts/PersonalizeContext";
import AppRoutes from "@/routes/AppRoutes";
import { FilterProvider } from "./contexts/filterSearch";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { initialOptions } from "./contexts/PaypalContext";

export const googleClient = import.meta.env.VITE_GOOGLE_CLIENT_ID;
socket.on("connect", () => {
  console.log(`✅ Connected to server with ID: ${socket.id}`);
});

socket.on("welcomeToServer", (data) => {
  console.log(data);
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;
