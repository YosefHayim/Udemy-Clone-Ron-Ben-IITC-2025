import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EmailProvider } from "@/contexts/EmailContext";
import { PersonalizeProvider } from "@/contexts/PersonalizeContext";
import AppRoutes from "@/routes/AppRoutes";
import { FilterProvider } from "./contexts/FilterSearch";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { initialOptions } from "./contexts/PaypalContext";
// import { SocketProvider } from "./Contexts/Socket";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";

export const googleClient = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {/* <SocketProvider> */}
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
            {/* </SocketProvider> */}
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
