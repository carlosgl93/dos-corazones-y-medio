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
  Avatar,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { adminRoutes } from "../../routes";
import { mobile, tablet, desktop } from "../../styles/breakpoints";
import { Router, useRouter } from "next/router";

const styles = {
  root: {
    flexGrow: 1,
  },
};

interface Props {
  children: React.ReactNode;
}

const AdminLayout: React.FunctionComponent<Props> = ({ children }) => {
  const [state, setState] = React.useState({
    left: false,
  });

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
        {adminRoutes.map((r) => (
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
              <NextLink href="/admin" passHref>
                <Typography variant="h6" color={contrastText}>
                  Administración
                </Typography>
              </NextLink>
            </Box>

            <Box>
              <IconButton sx={{ color: contrastText }}>
                <AddCircleOutlineIcon />
              </IconButton>
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
                href="/admin"
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
                <Typography variant="h6">Administración</Typography>
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
                <Button
                  sx={{
                    color: contrastText,
                    ":hover": {
                      bgColor: contrastText,
                      color: main,
                    },
                  }}
                  onClick={() => router.push("/products/add")}
                  endIcon={<AddCircleOutlineIcon />}
                >
                  <Typography>Agregar producto</Typography>
                </Button>
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

export default AdminLayout;
