// modulos gerais
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// components
import { useDrawerContext } from '../shared/contexts';
import { PaginaInicial, Anotacoes, Login } from '../../src/pages';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  // opções de menus
  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        label: 'Página inicial',
        path: '/pagina-inicial',
      },
      {
        icon: 'star',
        label: 'Anotações',
        path: '/anotacoes',
      },
      {
        icon: 'logout',
        label: 'Sair',
        path: '/login',
      },
    ]);
  }, []);

  return (
    <Routes>
      {/* página inicial */}
      <Route path="/pagina-inicial" element={ <PaginaInicial /> } />

      {/* anotações */}
      <Route path="/anotacoes" element={ <Anotacoes /> } />

      {/* sair */}
      <Route path="/login" element={ <Login /> }/>

      {/* rota inexistente */}
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
