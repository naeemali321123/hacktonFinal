import { classes } from "./StudentDataStyle";
import "./StudentData.css";
import { Button } from "@material-ui/core";
import { useState } from "react";

export default function StudentData() {
  const [id, setId] = useState();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  return (
    <>
      <form submit="submit" style={{ display: "flex", padding: "15px" }}>
      <td style={classes.border}>
              <input
                type="text"
                placeholder="ID"
                onChange={(e) => {
                  setId(e.target.value);
                }}
                value={id}
              />
            </td>
            <td style={classes.border}>
              <input
                type="text"
                placeholder=" User Name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                value={userName}
              />
            </td>
            <td style={classes.border}>
              <input
                type="text"
                placeholder=" Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </td>

        <Button variant="contained" size="small" color="Primary">
          Reset
        </Button>
        <Button variant="contained" size="small" color="Primary">
          Update
        </Button>
        <Button variant="contained" size="small" color="Primary">
          Submit
        </Button>
      </form>

      <div style={{ display: "flex", padding: "15px" }}>
        <table style={classes.border}>
          <tr>
            <th style={classes.border}>ID</th>
            <th style={classes.border}>UserName</th>
            <th style={classes.border}>Email</th>
            <th style={classes.border} colSpan="2">
              Actions
            </th>
          </tr>
          <tr>
            <td style={classes.border}>
              <input
                type="text"
                placeholder="ID"
                onChange={(e) => {
                  setId(e.target.value);
                }}
                value={id}
              />
            </td>
            <td style={classes.border}>
              <input
                type="text"
                placeholder=" User Name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                value={userName}
              />
            </td>
            <td style={classes.border}>
              <input
                type="text"
                placeholder=" Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </td>
            <td style={classes.border}>
              <Button variant="contained" size="small" color="Primary">
                Edit
              </Button>
            </td>
            <td style={classes.border}>
              <Button variant="contained" size="small" color="Primary">
                Delete
              </Button>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
