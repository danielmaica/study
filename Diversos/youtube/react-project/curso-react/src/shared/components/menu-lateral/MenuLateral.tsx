import { useMemo } from 'react';
import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, Switch, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { useAppThemeContext, useDrawerContext } from '../../contexts';
import { DarkTheme, LightTheme } from '../../themes';
import AvatarImg from '../../img/avatar.png';

interface IMenuLateral {
  children: React.ReactNode;
}



export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
  // alternar temas e ícones do switch
  const theme = useTheme();
  const { toggleTheme } = useAppThemeContext();
  const themeIcon = useMemo(() => {
    if (theme === LightTheme) {     
      return (<LightModeIcon/>);    
    }  
    return (<DarkModeIcon/>);    
  }, [theme]);

  // responsividade
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      {/* menu lateral */}
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen} >
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column" style={{ color: theme === DarkTheme ? '#00ACE4' : '#80227B' }} >
          {/* componente de alternar tema */}
          <Box width="100%" display="flex" alignItems="center" justifyContent="center">
            { theme === LightTheme ? themeIcon : false }       
            <Switch onChange={toggleTheme} checked={theme === DarkTheme}/> 
            { theme === DarkTheme ? themeIcon : false }       
          </Box>

          {/* avatar */}
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar
              sx={{ height: theme.spacing(18), width: theme.spacing(18) }}
              alt="icon"
              src={AvatarImg} />
          </Box>
          
          {/* divisor do menu lateral */}
          <Divider />

          {/* lista de opções do menu lateral */}
          <Box flex={1}>
            <List component="nav">

              {/* botão página inicial */}
              <ListItemButton>
                <ListItemIcon>
                  <Icon style={{color: theme === DarkTheme ? '#00ACE4' : '#80227B'}}>
                    home
                  </Icon>
                </ListItemIcon>
                <ListItemText primary="Página inicial" />
              </ListItemButton>
              
              {/* botão sair */}
              <ListItemButton>
                <ListItemIcon>
                  <Icon style={{color: theme === DarkTheme ? '#00ACE4' : '#80227B'}}>
                    logout
                  </Icon>
                </ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItemButton>
            </List>
          </Box>
          
        </Box>
      </Drawer>

      {/* restante do menu lateral */}
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};