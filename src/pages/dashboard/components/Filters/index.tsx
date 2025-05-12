import {
  Box,
  InputAdornment,
  TextField,
  SxProps,
  Badge,
  IconButton,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";

const textFieldStyles: SxProps = {
  direction: "rtl",
  backgroundColor: "#eee",
  borderRadius: "8px",
  "& .MuiInputBase-root": {
    fontSize: "12px",
    width: "220px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
};

const commonInputProps = {
  startAdornment: (
    <InputAdornment position="start">
      <SearchIcon />
    </InputAdornment>
  ),
};

const iconData = [
  { Icon: PersonIcon, count: 4 },
  { Icon: NotificationsIcon, count: 2853 },
  { Icon: ChatBubbleIcon, count: 0 },
  { Icon: ThumbUpAltIcon, count: 23, color: "#f44336" },
  { Icon: ThumbDownAltIcon, count: 210, color: "#2196f3" },
];

const Filters = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box display={"flex"} gap={1}>
        <TextField
          placeholder="ابحث عن مستخدم"
          size="small"
          sx={textFieldStyles}
          InputProps={commonInputProps}
        />
        <TextField
          placeholder=" ابحث عن رقم هاتف"
          size="small"
          sx={textFieldStyles}
          InputProps={commonInputProps}
        />
      </Box>
      <Box
        sx={{
          width: "18%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {iconData.map(({ Icon, count, color }, index) => (
          <Badge
            key={index}
            badgeContent={count}
            color="error"
            showZero={count === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: "auto",
                left: -15,
              },
            }}
          >
            <IconButton
              sx={{
                backgroundColor: "#eee",
                borderRadius: "10px",
                width: "40px",
              }}
            >
              <Icon sx={{ fontSize: "1rem", color: color }} />
            </IconButton>
          </Badge>
        ))}
      </Box>
    </Box>
  );
};

export default Filters;
