import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { Sidebar, Topbar } from "..";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Topbar />
      <Sidebar />
      {children}
    </Box>
  );
};
