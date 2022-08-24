// dependências - módulos
import { BrowserRouter } from "react-router-dom";

// componentes
import { AppRoutes } from "./routes/AppRoutes";
import { AppThemeProvider } from "./shared/contexts";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
};
