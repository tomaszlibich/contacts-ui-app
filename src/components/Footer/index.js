import { useHistory, useLocation } from "react-router-dom";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { FormattedMessage } from "react-intl";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => {
  return {
    action: {
      fontSize: "1.2em",
    },
    actionIcon: {
      display: "block",
      marginBottom: "2px",
    },
    root: {
      bottom: "0",
      left: "0",
      position: "fixed",
      right: "0",
      width: '100%'
    },
  };
};

const NavigationActions = [
  {
    route: "contacts",
    icon: "address-book",
  },
  {
    route: "home",
    icon: "home",
  },
  {
    route: "add",
    icon: "user-plus",
  }
];

const checkIsShown = (location, pathname) => {
  return pathname !== `/${location}`;
};

const Footer = (props) => {
  const { classes } = props;
  const history = useHistory();
  const location = useLocation();

  return (
    <BottomNavigation showLabels className={classes.root}>
      {NavigationActions.map((action, index) => {
        const { icon, route } = action;
        const isShown = checkIsShown(route, location.pathname);

        if (!isShown) {
          return null;
        }

        return (
          <BottomNavigationAction
            className={`${classes.action} animated flipInX`}
            key={index}
            label={<FormattedMessage id={`navigation.${route}`} />}
            icon={<i className={`fas fa-${icon} ${classes.actionIcon}`}></i>}
            onClick={() => {
              history.push(`/${route}`);
            }}
          />
        );
      })}
    </BottomNavigation>
  );
};

export default withStyles(styles)(Footer);
