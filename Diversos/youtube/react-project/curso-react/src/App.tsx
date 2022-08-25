// dependências - módulos
import { BrowserRouter } from 'react-router-dom';

// componentes
import { AppRoutes } from './routes/AppRoutes';
import { MenuLateral } from './shared/components';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';

export const App = () => {
  return (
    <AppThemeProvider> {/* provedor do contexto do tema */}
      <DrawerProvider> {/* provedor do contexto do menu lateral */}
        <BrowserRouter> {/* import para rotas */}

          <MenuLateral> {/* componente menu lateral */}
            <AppRoutes /> {/* componente criador das rotas */}
          </MenuLateral>

        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
