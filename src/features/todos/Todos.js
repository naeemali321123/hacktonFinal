import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import Todo from "../todo/Todo";
import MenuIcon from "@mui/icons-material/Menu";

export default function Todos() {
  var dayTitle = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var currentDate = new Date();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDay();
  var date = currentDate.getDate();

  switch (day) {
    case 0:
      day = dayTitle[0];
      break;
    case 1:
      day = dayTitle[1];
      break;
    case 2:
      day = dayTitle[2];
      break;
    case 3:
      day = dayTitle[3];
      break;
    case 4:
      day = dayTitle[4];
      break;
    case 5:
      day = dayTitle[5];
      break;
    case 6:
      day = dayTitle[6];
      break;
  }
  switch (month) {
    case 1:
      month = 'Jan'
      break;
    case 2:
      month = 'Feb'
      break;
    case 3:
      month = 'Mar'
      break;
    case 4:
      month = 'Apr'
      break;
    case 5:
      month = 'May'
      break;
    case 6:
      month = 'Jun'
      break;
    case 7:
      month = 'Jul'
      break;
    case 8:
      month = 'Aug'
      break;
    case 9:
      month = 'Sep'
      break;
    case 10:
      month = 'Oct'
      break;
    case 11:
      month = 'Nov'
      break;
    case 12:
      month = 'Dec'
      break;
  
    default:
      break;
  }
  let todosListTest = "My Day";
  return (
    <>
      <Box sx={{ mx: "5px" }}>
        <List>
          <ListItem
            disablePadding
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box sx={{ display: "flex" }}>
              <Button size="small">
                <MenuIcon sx={{ paddingRight: "5px" }} />
              </Button>
              <Typography fontSize={25}>{todosListTest}</Typography>
              <Button size="small">
                <MoreHorizIcon sx={{ paddingRight: "5px" }} />
              </Button>
            </Box>
            <Box>
              <Button size="small">
                <SortByAlphaIcon sx={{ paddingRight: "5px" }} />
                <ListItemText primary="Sort" />
              </Button>
              <Button size="small">
                <LightbulbOutlinedIcon sx={{ paddingRight: "5px" }} />
                <ListItemText primary="Suggestions" />
              </Button>
            </Box>
          </ListItem>
          <Box sx={{ ml: "70px" }}>{day} {date} {month}</Box>
        </List>
      </Box>
      <Todo />
    </>
  );
}
