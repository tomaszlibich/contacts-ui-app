import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { FormattedMessage } from "react-intl";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  root: {
    flexGrow: 1,
    marginTop: '48px'
  },
  details: {
    margin: '24px 0'
  }
});

const HomeView = (props) => {
  const { classes } = props;

  return (
    <Container className={classes.root}>
      <Typography variant="h5" component="h3">
        <FormattedMessage id="home.instructions" />
      </Typography>
      <Box className={classes.details}>
        <Typography variant="body2">
          <FormattedMessage id="home.instructions.paragraph1" />
        </Typography>
      </Box>
      <Box className={classes.details}>
        <Typography variant="body2">
          <FormattedMessage id="home.instructions.paragraph2" />
        </Typography>
      </Box>
      <Box className={classes.details}>
        <Typography variant="body2">
          <FormattedMessage id="home.instructions.paragraph3" />
        </Typography>
        <Typography variant="body2">
          <FormattedMessage id="home.instructions.paragraph4" />
        </Typography>
        <Typography variant="body2">
          <FormattedMessage id="home.instructions.paragraph5" />
        </Typography>
      </Box>
      <Box className={classes.details}>
        <Typography variant="body2">
          <FormattedMessage id="home.instructions.paragraph6" />
        </Typography>
      </Box>
    </Container>
  );
};

export default withStyles(styles)(HomeView);
