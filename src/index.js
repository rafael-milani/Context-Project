import { StrictMode } from "react";
import { createRoot } from 'react-dom/client' 
import { AuthProvider } from "./providers/auth";
import App from "./App";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
