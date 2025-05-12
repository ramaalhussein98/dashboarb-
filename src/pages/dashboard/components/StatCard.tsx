import React from "react";
import { alpha, Box, Stack, Typography } from "@mui/material";

interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, color }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: 2,
        p: 2,
        mt: 1,
        width: "32.8%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          backgroundColor: alpha(color, 0.1),
          height: "30px",
          display: "flex",

          alignItems: "center",
          borderRadius: "4px",
          width: "30px",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
      <Stack display={"flex"} mr={1}>
        <Typography
          fontWeight="bold"
          lineHeight={1}
          fontSize={20}
          sx={{ color }}
        >
          {value}
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: "gray",
          }}
        >
          {label}
        </Typography>
      </Stack>
    </Box>
  );
};

export default StatCard;
