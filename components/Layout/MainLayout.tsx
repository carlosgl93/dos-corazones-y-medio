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
          <ListItem>
            <Link href={r.link}>{r.name}</Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="static">
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
            Doscorazonesymedio
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={state.left} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
      {children}
      <BottomNavigation>
        <Typography variant="h6" color="inherit">
          Rancagua, 2023
        </Typography>
      </BottomNavigation>
    </div>
  );
};

export default MainLayout;
