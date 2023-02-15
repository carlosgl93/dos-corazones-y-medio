import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import routes from "../../routes";
import { mobile, tablet, desktop } from "../../styles/breakpoints";

const styles = {
  root: {
    flexGrow: 1,
  },
};

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<Props> = ({ children }) => {
  const mobileLayout = useMediaQuery(mobile);

  const [state, setState] = React.useState({
    left: false,
  });

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
        backgroundColor: "#E6C647",
        height: mobileLayout ? "100vh" : "auto",
      }}
    >
      <List
        sx={{
          display: mobileLayout ? "block" : "flex",
          flexGrow: 1,
          justifyContent: "space-around",
        }}
      >
        {routes.map((r) => (
          <ListItem
            className="nav-link"
            key={r.name}
            sx={{
              minWidth: mobileLayout ? "100%" : "15vw",
              color: "#A13217",
            }}
          >
            <Link href={r.link}>{r.name}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#E6C647",
          minHeight: "5vh",
        }}
      >
        {mobileLayout ? (
          // mobile
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon style={{ color: "#A13217" }} />
            </IconButton>
            <Typography variant="h6" color="#A13217">
              Dos corazones y medio
            </Typography>
          </Toolbar>
        ) : (
          // desktop
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box
              className="nav-link"
              sx={{
                padding: "0vh 2.5vw",
              }}
            >
              <Link
                href="/"
                style={{
                  color: "#A13217",
                  display: "flex",
                  alignItems: "center",
                }}
                passHref
              >
                <IconButton>
                  <HomeIcon
                    sx={{
                      color: "#A13217",
                    }}
                  />
                </IconButton>
                <Typography variant="h6">2 Corazones y Medio</Typography>
              </Link>
            </Box>
            <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
              {sideList()}
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
        }}
      >
        {children}
      </Box>

      <BottomNavigation
        sx={{
          display: "flex",
          flex: 1,
          backgroundColor: "#98C895",
          justifyContent: "center",
          minHeight: "5vh",
          // alignContent: "center",
        }}
      >
        <Typography variant="h6" color="inherit">
          Rancagua, 2023
        </Typography>
      </BottomNavigation>
    </div>
  );
};

export default MainLayout;
