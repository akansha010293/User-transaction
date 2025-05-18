import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppContext } from "../../hooks/useAppProvider";
import { toTitleCase } from "../../utility/user";

export const Topbar = () => {
  const [openDrawer, setDrawerOpen] = useState(false);
  const { user } = useAppContext();

  const handleDrawerToggle = () => setDrawerOpen(!openDrawer);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#1976d2",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOpenRoundedIcon sx={{ mr: 1 }} />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Transaction Portal
        </Typography>
        <AccountCircleIcon sx={{ mr: 1 }} />
        <Typography>
          {user?.username ? toTitleCase(user?.username) : "Guest user"}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
