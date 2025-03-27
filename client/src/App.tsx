import { GoogleOAuthProvider } from '@react-oauth/google';
import AppRoutes from './routes/AppRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const App = () => {
  return (
    <GoogleOAuthProvider clientId="935575669979-5b0kqifsd8rgqsg2kul01pafbq2o62pv.apps.googleusercontent.com">
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
};

export default App;
