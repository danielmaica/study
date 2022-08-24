import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, Switch, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { useAppThemeContext } from '../../contexts';
import { DarkTheme } from '../../themes';
import { useMemo } from 'react';

interface IMenuLateral {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
  
  const theme = useTheme();
  const { toggleTheme } = useAppThemeContext();
  const toggleIconTheme = useMemo(() => {
    if (theme === DarkTheme) {     
      return (<DarkModeIcon/>);    
    }
    return (<LightModeIcon/>);  
  }, [theme]);

  return (
    <>
      <Drawer variant="permanent">
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
          <Box width="100%" display="flex" alignItems="center" justifyContent="center">
            <Switch onChange={toggleTheme} checked={theme === DarkTheme}/> 
            {toggleIconTheme}       
          </Box>
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar
              sx={{ height: theme.spacing(18), width: theme.spacing(18) }}
              alt="icon"
              src="https://scontent.fpoa13-1.fna.fbcdn.net/v/t39.30808-6/293790898_2374539836017290_4461253326197490951_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHY_El7TEAyMMwcV1r-IvMaeN8O_IV6-f543w78hXr5_iuwsZc7OKBa_wJIUQyWA2GtCrxQM8SPPLNl-57ewgcc&_nc_ohc=6NRJvqPb9LsAX-6bmhI&_nc_ht=scontent.fpoa13-1.fna&oh=00_AT8c6-MYkUDPhbVqbZmJZLgLFL7h-cyJgdU9ySnacaRCHA&oe=630B7C8A" />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>
                    home
                  </Icon>
                </ListItemIcon>
                <ListItemText primary="Página inicial" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Icon>
                    logout
                  </Icon>
                </ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItemButton>
            </List>
          </Box>
          
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
