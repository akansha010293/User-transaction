import React from "react";
import {
  Box,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Toolbar,
  Typography,
  Drawer,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppProvider";

const drawerWidth = 240;

const sidebarList = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  {
    text: "Transaction",
    icon: <ReceiptLongIcon />,
    path: "/transaction",
  },
];

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useAppContext();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }} //ensures the drawer and its contents have a consistent width, don’t shrink in a flex layout, and maintain a clean sizing model.
    >
      <Box display="flex" flexDirection="column" height="100%">
        <Toolbar>
          <DashboardIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Example Company</Typography>
        </Toolbar>
        <Divider />
        <List>
          {sidebarList.map(({ text, icon, path }) => (
            <ListItemButton key={text} component={Link} to={path}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
        </List>
        <Box flexGrow={1} />
        <List>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};
