import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: 'sticky',
    color: "black",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#edebe9",
      color: "#555",
    },
  },
  item: {
    display: "flex",
    justifyContent: 'left',
 
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(),
      marginLeft: theme.spacing(1),
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  text: {
    fontWeight: 350,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  leftbarbottom:{
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  padding:{
    display: "flex",
    justifyContent: 'left',
    paddingTop:'80px',
 
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(),
      marginLeft: theme.spacing(1),
      cursor: "pointer",
    },
  },
  

}));
