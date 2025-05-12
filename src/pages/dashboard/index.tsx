import React from "react";
import Filters from "./components/Filters";
import StatCard from "./components/StatCard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import PeopleIcon from "@mui/icons-material/People";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { Box, Stack } from "@mui/material";
import CityChart from "./components/CityChart";

const Dashboard = () => {
  const statsData = [
    {
      value: "86,931",
      label: "عدد المستخدمين",
      icon: <PeopleIcon sx={{ color: "#29b6f6" }} />,
      color: "#29b6f6",
    },
    {
      value: "610,538,451",
      label: "عدد النقاط",
      icon: <EmojiObjectsIcon sx={{ color: "#ba68c8" }} />,
      color: "#ba68c8",
    },
    {
      value: "41,145",
      label: "إجمالي الطلبات",
      icon: <AssignmentIcon sx={{ color: "#9c27b0" }} />,
      color: "#9c27b0",
    },

    {
      value: "36,706",
      label: "طلبات معتمدة",
      icon: <ThumbUpAltIcon sx={{ color: "#66bb6a" }} />,
      color: "#66bb6a",
    },
    {
      value: "2,851",
      label: "طلبات معلقة",
      icon: <EmojiEmotionsIcon sx={{ color: "#fdd835" }} />,
      color: "#fdd835",
    },
    {
      value: "6",
      label: "طلبات قيد المعالجة",
      icon: <AutorenewIcon sx={{ color: "#29b6f6" }} />,
      color: "#29b6f6",
    },
  ];

  return (
    <Stack width={"100%"}>
      <Filters />
      <Box
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        gap={1}
        mt={2}
      >
        {statsData.map((item) => (
          <StatCard {...item} />
        ))}
      </Box>
      <Stack display={"flex"} flexDirection={"row"} gap={1}>
        <CityChart title={"أعلى 10 بلدان حسب النقاط"} />
        <CityChart title={"أعلى 10 بلدان حسب الطلبات"} />
      </Stack>
    </Stack>
  );
};

export default Dashboard;
