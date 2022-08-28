import {
  Box,
  IconButton,
  ListItemText,
  Radio,
} from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Input } from "@material-ui/core";
import Ticket from "../ticket/Ticket";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import HideSourceOutlinedIcon from "@mui/icons-material/HideSourceOutlined";
import { Delete } from "@material-ui/icons";

export default function RightBar() {
  var todoTitle = "Go to Home on dated 12-10-22";
  return (
    <Box sx={{
      height: `calc(100vh - 70px)`,
      display: "relative",
      width: "100%",
      bgcolor: "#EDEBE9",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
    }}>
      <Box
        countainer
        sx={{ with: "100%", padding: "10px", backgroundColor: "#EDEBE9" }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            display: "flex",
            padding: "5px",
            alignItems: "center",
          }}
        >
          <Radio />
          <ListItemText>{todoTitle}</ListItemText>
          <IconButton>
            <StarOutlineIcon />
          </IconButton>
        </Box>
        <Box sx={{ backgroundColor: "white" }}>
          <IconButton>
            <AddOutlinedIcon />
          </IconButton>
          <Input disableUnderline placeholder="Add a Step" aria-placeholder="" />
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Ticket icon={LightModeOutlinedIcon} title="Added to My Day" />
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Ticket icon={NotificationsNoneOutlinedIcon} title="Remind me at" />
          <Ticket icon={CalendarMonthOutlinedIcon} title="Due Date" />
          <Ticket icon={EventRepeatOutlinedIcon} title="Repeat" />
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Ticket icon={LocalOfferOutlinedIcon} title="Pick a catagory" />
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Ticket icon={AttachFileOutlinedIcon} title="Add a File" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: '10px'
        }}
      >
        <HideSourceOutlinedIcon />
        <ListItemText sx={{ textAlign: "center" }}>
          Created on dated
        </ListItemText>
        <IconButton>
          <Delete />
        </IconButton>
      </Box>
    </Box>
  );
}
