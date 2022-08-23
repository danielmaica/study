// dependências - módulos
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";

// componentes
import { AppRoutes } from "./routes/AppRoutes";
import { LightTheme } from "./shared/themes";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}