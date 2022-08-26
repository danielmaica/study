// modulos gerais
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

// components
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

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
    ]);
  }, []);

  return (
    <Routes>
      {/* página inicial */}
      <Route path="/pagina-inicial" element={ <Button variant="contained" onClick={toggleDrawerOpen}>Menu</Button>}/>

      {/* anotações */}
      <Route path="/anotacoes" element={ <Button variant="contained" onClick={toggleDrawerOpen}>Em Construção</Button>}/>

      {/* rota inexistente */}
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
