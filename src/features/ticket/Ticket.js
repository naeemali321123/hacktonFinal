import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton, ListItemIcon, ListItemText } from "@mui/material";

export default function Ticket(props) {
  return (
    <Box sx={{ display: "flex", backgroundColor: "white" }}>
      <Button
        sx={{
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ListItemIcon>{<props.icon />}</ListItemIcon>
        <ListItemText sx={{ textAlign: "left" }}>{props.title}</ListItemText>
      </Button>
      <IconButton>
        <CloseIcon />
      </IconButton>
    </Box>
  );
}
