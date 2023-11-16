import React from 'react';
import NextLink from 'next/link';

import {
  AppBar,
  Toolbar,
  Typography,
  BottomNavigation,
  IconButton,
  List,
  ListItem,
  Drawer,
  Box,
  useMediaQuery,
  useTheme,
  Badge,
  Link,
  Button,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { userRoutes } from '../../routes';
import { mobile, tablet, desktop } from '../../styles/breakpoints';
import { Router, useRouter } from 'next/router';
import { CartContext } from '../../context';
import Logo from './Logo';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const text = '#2B4162';
const title = '#C49799';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<Props> = ({ children }) => {
  const [state, setState] = React.useState({
    left: false,
  });
  const { cart } = React.useContext(CartContext);
  console.log({ cart });

  const theme = useTheme();
  const router = useRouter();
  const mobileLayout = useMediaQuery(mobile);

  const { main, contrastText } = theme.palette.primary;

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setState({ ...state, left: open });
    };

  const sideList = () => (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.light,
        height: mobileLayout ? '100vh' : 'auto',
      }}
    >
      <List
        sx={{
          display: mobileLayout ? 'block' : 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        {userRoutes.map((r) => (
          <ListItem
            onClick={() => router.push(r.link)}
            className='nav-link'
            key={r.name}
            sx={{
              // mobileLayout ? minWidth: '10'
              // minWidth: mobileLayout ? "100%" : "10vw",
              color: contrastText,
            }}
            color='secondary'
          >
            <NextLink href={r.link} passHref>
              <Button
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: contrastText,
                  fontSize: '0.7rem',
                  ':hover': {
                    bgcolor: theme.palette.secondary.main,
                    color: text,
                  },
                }}
              >
                {r.name}
              </Button>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar
        position='static'
        sx={{
          backgroundColor: theme.palette.primary.light,
          minHeight: '5vh',
        }}
      >
        {mobileLayout ? (
          // mobile
          <Toolbar>
            <Box>
              <IconButton
                edge='start'
                color='inherit'
                aria-label='menu'
                onClick={toggleDrawer(true)}
              >
                <MenuIcon style={{ color: contrastText }} />
              </IconButton>
            </Box>
            <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <NextLink href='/' passHref>
                <Typography variant='h6' color={contrastText}>
                  Dos corazones y medio
                </Typography>
              </NextLink>
            </Box>

            <Box>
              <NextLink href='/cart' passHref>
                <IconButton sx={{ color: contrastText }}>
                  <Badge badgeContent={cart.length} color='secondary' sx={{}}>
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
              </NextLink>
            </Box>
          </Toolbar>
        ) : (
          // DESKTOP
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              className='nav-link'
              sx={{
                padding: '0vh 2.5vw',
                flex: 1,
              }}
            >
              <NextLink
                href='/'
                style={{
                  color: contrastText,
                  display: 'flex',
                  alignItems: 'center',
                }}
                passHref
              >
                <IconButton>
                  <Logo />
                </IconButton>
              </NextLink>
            </Box>
            <Box
              style={{
                display: 'flex',
                backgroundColor: theme.palette.primary.light,
              }}
            >
              {sideList()}
            </Box>
            <Box
              sx={{
                flex: 1,
                justifyContent: 'end',
                color: main,
              }}
            >
              <ListItem
                sx={{
                  justifyContent: 'end',
                  ':hover': {
                    bgColor: theme.palette.secondary.main,
                    color: contrastText,
                  },
                }}
              >
                <NextLink href='/cart' passHref>
                  <IconButton sx={{ color: contrastText }}>
                    <Badge badgeContent={cart.length} color='secondary' sx={{}}>
                      <ShoppingCartOutlinedIcon />
                    </Badge>
                  </IconButton>
                </NextLink>
              </ListItem>
            </Box>
          </Box>
        )}
      </AppBar>
      <Drawer open={state.left} onClose={toggleDrawer(false)}>
        <Box
          display='flex'
          sx={{
            justifyContent: 'center',
          }}
        >
          <Logo />
        </Box>

        {sideList()}
      </Drawer>
      <Box
        component='main'
        sx={{
          minHeight: '85vh',
          maxWidth: '100vw',
          overflow: 'hidden',
          scrollbarWidth: 'none',
        }}
      >
        {children}
      </Box>

      <BottomNavigation
        sx={{
          display: 'flex',
          flex: 1,
          backgroundColor: theme.palette.primary.light,
          justifyContent: 'center',
          minHeight: '5vh',
          color: contrastText,
          alignItems: 'center',
          // alignContent: "center",
        }}
      >
        <Typography variant='h6' color='primary.contrastText'>
          Rancagua, 2023
        </Typography>
      </BottomNavigation>
    </Box>
  );
};

export default MainLayout;
