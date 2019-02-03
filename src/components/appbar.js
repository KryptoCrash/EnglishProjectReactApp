import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const styles = {
  appBar: {
    flexWrap: "wrap",
    background: "#444455",
    color: "#FFFFFF"
  },
  tabs: {
    width: "100%",
    flex: 1
  }
};

const NavBar = () => (
  <AppBar
    title="Title"
    style={styles.appBar}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  >
    <Tabs style={styles.tabs}>
      <Tab
        label="PROCRASTINATION/TIME MANAGEMENT"
        onClick={() => {
          window.location.replace("/");
        }}
      />
      <Typography type="title" color="inherit" style={{ flex: 1 }} />
      <Tab
        label="WELCOME!"
        onClick={() => {
          window.location.replace("/welcome");
        }}
      />
      <Tab
        label="RESEARCH"
        onClick={() => {
          window.location.replace("/research");
        }}
      />
      <Tab
        label="CONCLUSION"
        onClick={() => {
          window.location.replace("/conclusion");
        }}
      />
      <Tab
        label="BIBLIOGRAPHY"
        onClick={() => {
          window.location.replace("/bibliography");
        }}
      />
    </Tabs>
  </AppBar>
);
export default NavBar;
