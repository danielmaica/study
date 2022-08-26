// modulos externos
import { Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../contexts';

// components

// interfaces
import { ILayoutBaseDePaginaProps } from '../interfaces';

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, titulo }) => {

  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const theme = useTheme();
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height='100%' display='flex' flexDirection='column' gap={1}>
      
      {/* header */}
      <Box padding={1} display='flex' alignItems='center' height={theme.spacing(12)} gap={1}>

        {/* button de  menu aparece apenas se tela for menor que 600px */}
        {smDown && (<IconButton onClick={toggleDrawerOpen}>
          <Icon>menu</Icon>
        </IconButton>
        )}
        
        {/* titulo */}
        <Typography variant='h5'>
          {titulo}
        </Typography>
      </Box>
      
      {/* section */}
      <Box >
        Barra de ferramentas
      </Box>

      <Box >
        {children}
      </Box>
    </Box>
  );

};