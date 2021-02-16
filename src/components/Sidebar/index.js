import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import { FormattedMessage } from "react-intl";
import List from "@material-ui/core/List";
import React from "react";
import { SidebarLink } from "./SidebarLink";
//import auth from "../services/auth";
import { closeSidebar } from "../../actions/sidebar";
import { useStateValue } from "../../providers/state";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  list: {
    width: "250px",
  },
  book: {
    alignItems: "center",
    display: "flex",
    fontSize: "2em",
    height: "55px",
    padding: "0 16px",
  },
  bookBrand: {
    display: "inline-block",
    fontSize: "0.6em",
    fontFamily: "comfortaaregular, sans-serif",
    lineHeight: "55px",
    marginLeft: "18px",
    paddingTop: "10px",
  },
  brandLogo: {
    margin: "20px",
    width: "90%",
    maxWidth: "200px",
    maxHeight: "100px",
  },
});

const Sidebar = withStyles(styles)((props) => {
  const { classes } = props;
  const [{ sidebar }, dispatch] = useStateValue();

  return (
    <aside>
      <Drawer
        open={sidebar}
        onClose={() => closeSidebar(dispatch)}
        onClick={() => closeSidebar(dispatch)}
      >
        <div className={classes.list}>
          <Box className={classes.book}>
            <i className="fas fa-book-open" />
            <span className={classes.bookBrand}>Contacts Book</span>
          </Box>
          <Divider />
          <List>
            <SidebarLink
              to="/"
              label={<FormattedMessage id="navigation.home" />}
              faIcon="home"
            />
            <SidebarLink
              to="/add"
              label={<FormattedMessage id="navigation.add" />}
              faIcon="user-plus"
            />
            <SidebarLink
              to="/contacts"
              label={<FormattedMessage id="navigation.contacts" />}
              faIcon="address-book"
            />
          </List>
        </div>
      </Drawer>
    </aside>
  );
});

export default Sidebar;
