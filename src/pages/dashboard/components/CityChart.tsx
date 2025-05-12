import React from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { cityData } from "../../../constant";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { CityChartProps } from "../../../types";

const CityChart = ({ title }: CityChartProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack
      sx={{
        backgroundColor: "#fff",
        borderRadius: 2,
        p: 2,
        mt: 1,
        width: { xs: "100%", md: "50%" },
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h6" fontSize={{ xs: 16, md: 20 }} fontWeight={600}>
          {title}
        </Typography>
        <Button sx={{ color: "gray" }}>
          عرض الكل
          <ArrowBackIcon sx={{ fontSize: "18px", mr: 1 }} />
        </Button>
      </Box>
      <Box display={"flex"} gap={1} alignItems="center">
        <Box display={"flex"} alignItems={"center"} sx={{ color: "#4caf50" }}>
          <TrendingUpIcon sx={{ fontSize: 18, mr: 0.5 }} />
          <Typography fontWeight="bold" fontSize={14}>
            16,020,279
          </Typography>
        </Box>
        <Box
          sx={{
            color: "#0505c4",
            backgroundColor: "#c9dcf5",
            fontSize: 12,
            display: "flex",
            alignItems: "center",
            fontWeight: "600",
            borderRadius: "4px",
            padding: "1px 5px",
          }}
        >
          آخر أسبوع
        </Box>
      </Box>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={cityData}
            cx={isMobile ? "50%" : "85%"}
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {cityData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => new Intl.NumberFormat().format(value)}
          />
        </PieChart>
      </ResponsiveContainer>
      <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 2 }}>
        {cityData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              width: "28%",
            }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                backgroundColor: item.color,
                borderRadius: "50%",
              }}
            />
            <Box>
              <Typography variant="body2">{item.name}</Typography>
              <Typography>
                {new Intl.NumberFormat().format(item.value)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default CityChart;
