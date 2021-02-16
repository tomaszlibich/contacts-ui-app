import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./components/Footer";
import React from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import { withStyles } from "@material-ui/core/styles";

export const Layout = withStyles(() => ({
  root: {
    minHeight: "100%",
    paddingBottom: '20%'
  },
  main: {
    minHeight: "100%",
  },
}))((props) => {
  const { classes, children } = props;

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <TopBar />
      <Sidebar />
      <Box component="main" className={classes.main}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
});
