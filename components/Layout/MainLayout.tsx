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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import routes from "../../routes";

const styles = {
  root: {
    flexGrow: 1,
  },
};

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<Props> = ({ children }) => {
  const router = useRouter();

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
    <div>
      <List>
        {routes.map((r) => (
          <ListItem key={r.name}>
            <Link href={r.link}>{r.name}</Link>
          </ListItem>
        ))}
      </List>
    </div>
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
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Dos corazones y medio
          </Typography>
        </Toolbar>
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
