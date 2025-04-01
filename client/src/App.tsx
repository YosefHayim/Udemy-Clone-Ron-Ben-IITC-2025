import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { EmailProvider } from "@/contexts/EmailContext";
import { PersonalizeProvider } from "@/contexts/PersonalizeContext";
import AppRoutes from "@/routes/AppRoutes";
import { FilterProvider } from "./contexts/filterSearch";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { initialOptions } from "./contexts/PaypalContext";
import { SocketProvider } from "./contexts/socket";

export const googleClient = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const queryClient = new QueryClient();

const App = () => {
  return (
    <SocketProvider>
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
    </SocketProvider>
  );
};

export default App;
