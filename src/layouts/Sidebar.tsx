import React from "react";
import {
  Box,
  List,
  ListItemIcon,
  ListItemText,
  Drawer,
  ListItemButton,
  Avatar,
} from "@mui/material";
import {
  Dashboard,
  People,
  Message,
  Settings,
  Assignment,
  Help,
  Star,
  LocationOn,
  Business,
  LocalOffer,
  CardGiftcard,
  Block,
  Campaign,
  AdminPanelSettings,
} from "@mui/icons-material";

const drawerWidth = 200;

export const menuItems = [
  { text: "الإحصائيات", icon: <Dashboard /> },
  { text: "فترة متقدمة", icon: <Star /> },
  { text: "المحادثات", icon: <Message /> },
  { text: "المستخدمين", icon: <People /> },
  { text: "الطلبات", icon: <Assignment /> },
  { text: "الأسئلة", icon: <Help /> },
  { text: "النقاط والإشعارات", icon: <Campaign /> },
  { text: "تصنيفات الهدايا", icon: <CardGiftcard /> },
  { text: "البلدان", icon: <LocationOn /> },
  { text: "قوائمة الإعلانات", icon: <Block /> },
  { text: "الإعلانات", icon: <Business /> },
  { text: "العروض الخاصة", icon: <LocalOffer /> },
  { text: "مستخدمي الإدارة", icon: <AdminPanelSettings /> },
  { text: "الإدارة", icon: <Settings /> },
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: "#f8f9fa",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          backgroundColor: "#f8f9fa",
          boxSizing: "border-box",
          border: 0,

          direction: "rtl",
        },
      }}
    >
      <Box display={"flex"} alignItems={"center"} gap={1} mt={2}>
        <Avatar
          src="/stg-plus-logo.png"
          sx={{ width: 40, height: 40, mr: 1 }}
        />
        <Box sx={{ fontWeight: 700, fontSize: "1.1rem" }}>Stg plus</Box>
      </Box>
      <Box sx={{ overflow: "auto", mt: 2, width: "200px" }}>
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton
              key={index}
              sx={{
                py: "6px",
                textAlign: "right",
                "&:hover": {
                  backgroundColor: "#E5EAF2",
                  borderRadius: "10px 0px 0px 10px",
                },
                "&.Mui-selected": {
                  backgroundColor: "#E5EAF2",
                  borderRadius: "10px 0px 0px 10px",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "#E5EAF2",
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, mr: 1 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  },
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
