import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Button, FormControl } from "@mui/material";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import { Badge, Input } from "@material-ui/core";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";

export default function LeftBar() {
  return (
    <Box
      sx={{
        height: `calc(100vh - 70px)`,
        display: "relative",
        width: "100%",
        bgcolor: "#EDEBE9",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MenuIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LightModeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="My Day" />
                <Badge>{4}</Badge>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GradeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Important" />
              <Badge>{4}</Badge>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Planned" />
              <Badge>{4}</Badge>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Assigned to me" />
              <Badge>{4}</Badge>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Tasks" />
              <Badge>{4}</Badge>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItem>
              <ListItemIcon>
                <AddOutlinedIcon />
              </ListItemIcon>
              <FormControl sx={{ width: "25ch" }}>
                <Input
                  disableUnderline
                  placeholder="New list"
                  aria-placeholder=""
                />
              </FormControl>
              <Button>
                <CreateNewFolderOutlinedIcon />
              </Button>
            </ListItem>
          </ListItem>
        </List>
      </nav>
      <Box sx={{ display: "flex",  width: '350px' }}>
        <Button>
          <MailOutlineIcon />
        </Button>
        <Button size="small">
          <CalendarMonthOutlinedIcon />
        </Button>
        <Button size="small">
          <PeopleOutlineOutlinedIcon />
        </Button>
        <Button size="small">
          <AttachFileOutlinedIcon />
        </Button>
        <Button size="small">
          <DoneOutlineOutlinedIcon />
        </Button>
      </Box>
    </Box>
  );
}
