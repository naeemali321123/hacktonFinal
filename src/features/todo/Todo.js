import {
  Box,
  ButtonBase,
  Button,
  IconButton,
  Input,
} from "@mui/material";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DateAndTimePicker from "../dateAndtimePicker/DateAndTimePicker";
export default function Todo() {
  const [title, setTitle] = useState('');
  return (
    <div>
      <Box sx={{ backgroundColor: "#EDEBE9", borderRadius: "5px", mx: "10px" }}>
        <Box sx={{ display: "flex" }}>
          <Button size="large">
            <AddIcon />
          </Button>
          <Input disableUnderline
          value={title}
          onChange={(e)=> setTitle(e.target.value)}
            sx={{
              width: '95%',
              margin: '10px'
            }}
            placeholder="Add a Task"
            inputProps={{
              sx: {
                "&::placeholder": {
                  color: "blue",
                },
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "30px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <IconButton>
              <CalendarMonthOutlinedIcon />
            </IconButton>
            <IconButton>
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton>
              <EventRepeatOutlinedIcon />
            </IconButton>
          </Box>
          <IconButton>
            <ButtonBase>Add</ButtonBase>
          </IconButton>
        </Box>
        <DateAndTimePicker />

      </Box>
    </div>
  );
}
