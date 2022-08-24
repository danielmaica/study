// dependências - módulos
import { BrowserRouter } from 'react-router-dom';

// componentes
import { AppRoutes } from './routes/AppRoutes';
import { MenuLateral } from './shared/components';
import { AppThemeProvider } from './shared/contexts';

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
