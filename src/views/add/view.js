import ContactForm from '../../components/ContactForm';
import Container from "@material-ui/core/Container";
import { FormattedMessage } from "react-intl";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  header: {
    marginTop: theme.spacing(2),
    textAlign: 'center'
  },
  root: {
    flexGrow: 1
  }
});

const AddView = (props) => {
  const { classes } = props;

  return (
    <Container className={classes.root}>
      <Typography variant="h5" component="h3" className={classes.header}>
        <FormattedMessage id="add.newcontact" />
      </Typography>
      <ContactForm />
    </Container>
  );
};

export default withStyles(styles)(AddView);
