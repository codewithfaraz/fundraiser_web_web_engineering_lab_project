"use client";
import { useState } from "react";
import PersonalInformation from "@/components/PersonalInformation";
import Investments from "@/components/Investments";
import Projects from "@/components/Projects";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import classes from "./userProfile.module.css";
import Avatar from "@mui/material/Avatar";
import Profile from "./components/profile";

const drawerWidth = 280;

export default function userProfile() {
  const [currentContent, setCurrentContent] = useState("Personal Information");
  const clickHandler = (btn) => {
    setCurrentContent(btn);
  };
  return (
    <div className={classes.display}>
      <div className={classes.margi}>
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Personal Information", "Investments", "Your Projects"].map(
              (text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  onClick={() => {
                    clickHandler(text);
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </div>

      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "-20px" }}>
        <Toolbar />
        {currentContent === "Personal Information" ? (
          <PersonalInformation />
        ) : currentContent === "Investments" ? (
          <Investments />
        ) : (
          <Projects />
        )}
      </Box>
    </div>
  );
}
