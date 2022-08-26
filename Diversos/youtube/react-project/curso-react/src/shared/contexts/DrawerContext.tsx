import { createContext, useCallback, useContext, useState } from 'react';
import { IDrawerContextData, IDrawerProviderProps, IDrawerOption } from '../interfaces';

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<IDrawerProviderProps> = ({ children }) => {
  // estado do menu => aberto | fechado
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  // estado das options do menu
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);

  
  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen, drawerOptions, setDrawerOptions: handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
};