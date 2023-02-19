import * as React from "react";
import NextLink from "next/link";

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
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import routes from "../../routes";
import { mobile, tablet, desktop } from "../../styles/breakpoints";
import { Router, useRouter } from "next/router";
import { CartContext } from "../../context";

const styles = {
  root: {
    flexGrow: 1,
  },
};

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
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, left: open });
    };

  const sideList = () => (
    <Box
      sx={{
        backgroundColor: main,
        height: mobileLayout ? "100vh" : "auto",
      }}
    >
      <List
        sx={{
          display: mobileLayout ? "block" : "flex",
          justifyContent: "space-evenly",
        }}
      >
        {routes.map((r) => (
          <ListItem
            onClick={() => router.push(r.link)}
            className="nav-link"
            key={r.name}
            sx={{
              // mobileLayout ? minWidth: '10'
              // minWidth: mobileLayout ? "100%" : "10vw",
              color: contrastText,
            }}
            color="secondary"
          >
            <NextLink href={r.link} passHref>
              <Button
                sx={{
                  backgroundColor: contrastText,
                  color: main,
                  fontSize: "0.7rem",
                  ":hover": {
                    bgcolor: theme.palette.secondary.main,
                    color: contrastText,
                  },
                }}
              >
                {r.name}
              </Button>
              {/* <Link underline="hover" sx={{ color: contrastText }}>
                {r.name}
              </Link> */}
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: main,
          minHeight: "5vh",
        }}
      >
        {mobileLayout ? (
          // mobile
          <Toolbar>
            <Box>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon style={{ color: contrastText }} />
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", flex: 1, justifyContent: "center" }}>
              <NextLink href="/" passHref>
                <Typography variant="h6" color={contrastText}>
                  Dos corazones y medio
                </Typography>
              </NextLink>
            </Box>

            <Box>
              <NextLink href="/cart" passHref>
                <IconButton sx={{ color: contrastText }}>
                  <Badge badgeContent={cart.length} color="secondary" sx={{}}>
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
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              className="nav-link"
              sx={{
                padding: "0vh 2.5vw",
                flex: 1,
              }}
            >
              <NextLink
                href="/"
                style={{
                  color: contrastText,
                  display: "flex",
                  alignItems: "center",
                }}
                passHref
              >
                <IconButton>
                  <HomeIcon
                    sx={{
                      color: contrastText,
                    }}
                  />
                </IconButton>
                <Typography variant="h6">2 Corazones y Medio</Typography>
              </NextLink>
            </Box>
            <Box style={{ display: "flex" }}>{sideList()}</Box>
            <Box
              sx={{
                flex: 1,
                justifyContent: "end",
                color: main,
              }}
            >
              <ListItem
                sx={{
                  justifyContent: "end",
                  ":hover": {
                    bgColor: theme.palette.secondary.main,
                    color: contrastText,
                  },
                }}
              >
                <NextLink href="/cart" passHref>
                  <IconButton sx={{ color: contrastText }}>
                    <Badge badgeContent={cart.length} color="secondary" sx={{}}>
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
        {sideList()}
      </Drawer>
      <Box
        component="main"
        sx={{
          minHeight: "90vh",
          maxWidth: "100vw",
          overflow: "hidden",
          scrollbarWidth: "none",
        }}
      >
        {children}
      </Box>

      <BottomNavigation
        sx={{
          display: "flex",
          flex: 1,
          backgroundColor: main,
          justifyContent: "center",
          minHeight: "5vh",
          color: contrastText,
          alignItems: "center",
          // alignContent: "center",
        }}
      >
        <Typography variant="h6">Rancagua, 2023</Typography>
      </BottomNavigation>
    </Box>
  );
};

export default MainLayout;
