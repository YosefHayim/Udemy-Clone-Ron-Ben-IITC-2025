import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Importação da TanStack Query
import store from "./redux/index.tsx";
import App from "./App.tsx";
import "./index.css";

// Criação do QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(

  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>

);
