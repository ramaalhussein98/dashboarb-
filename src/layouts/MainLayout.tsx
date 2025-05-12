import React, { ReactNode } from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          p: 3,
          width: { sm: `calc(100% - 220px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
