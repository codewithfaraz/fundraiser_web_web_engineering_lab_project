"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import classes from "./userProfile.module.css";
const drawerWidth = 280;

export default function userProfile() {
  return (
    <div className={classes.display}>
      <div className={classes.margi}>
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Profile", "Invested", "Projects"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </div>

      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "64px" }}>
        <Toolbar />
        <Typography paragraph>Your content here...</Typography>
      </Box>
    </div>
  );
}
