import { GoogleOAuthProvider } from "@react-oauth/google";
import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
<<<<<<< HEAD
import SyncUser from "./components/SyncUser";
=======
>>>>>>> b48f82a4b0cf441f6bc25ff511aca3d168de6971

export const googleClient = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={googleClient}>
        <SyncUser />
        <AppRoutes />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
};

export default App;
